import * as R from 'ramda';
import * as MODELS from '@models';
import { getMessageModelByType } from '@msg';

export const mutateMessages = (transaction: any) => {
  return insertMissingWithdrawRewardsMsgWhenDelegating(transaction);
};

const insertMissingWithdrawRewardsMsgWhenDelegating = (transaction: any) => {
  const messages = R.pathOr([], ['messages'], transaction);
  const logs = R.pathOr([], ['logs'], transaction);

  let isWithdrawMsgFound = false;

  for (let i = 0; i < messages.length; i += 1) {
    const model = getMessageModelByType(messages[i]?.['@type']);

    if (model === MODELS.MsgWithdrawDelegatorReward) {
      isWithdrawMsgFound = true;
      break;
    }
  }

  if (isWithdrawMsgFound) {
    return [messages, logs];
  }

  for (let i = 0; i < messages.length; i += 1) {
    const model = getMessageModelByType(messages[i]?.['@type']);

    if (model === MODELS.MsgDelegate) {
      const coinReceivedEvent = getEventAtIndex(transaction, i, 'coin_received');
      const coinSpentEvent = getEventAtIndex(transaction, i, 'coin_spent');

      if (coinReceivedEvent && coinSpentEvent) {
        const [withdrawMessage, events] = buildWithdrawRewardsMessage(messages[i],
          coinReceivedEvent, coinSpentEvent);

        if (i > 0) {
          i -= 1;
        }

        messages.splice(i, 0, withdrawMessage);
        logs.splice(i, 0, { events });

        break;
      }
    }
  }

  return [messages, logs];
};

const getEventAtIndex = (transaction: any, index: number, eventType: string) => {
  const logs = R.pathOr([], ['logs'], transaction);
  if (logs.length <= index) {
    return;
  }

  const { events } = logs[index];

  for (let i = 0; i < events.length; i += 1) {
    if (events[i].type === eventType) {
      return events[i];
    }
  }
};

const buildWithdrawRewardsMessage = (delegateMsg: any, coinReceivedEvent: any,
  coinSpentEvent: any) => {
  const withdrawMsg = {
    '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
    delegator_address: delegateMsg.delegator_address,
    validator_address: delegateMsg.validator_address,
  };

  const events = [];

  events.push(buildEvent('coin_received', [
    {
      key: 'receiver', value: coinReceivedEvent.attributes[0].value,
    },
    {
      key: 'amount', value: coinReceivedEvent.attributes[1].value,
    },
  ]));

  events.push(buildEvent('coin_spent', [
    {
      key: 'spender', value: coinSpentEvent.attributes[0].value,
    },
    {
      key: 'amount', value: coinSpentEvent.attributes[1].value,
    },
  ]));

  events.push(buildEvent('message', [
    {
      key: 'action', value: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
    },
    {
      key: 'sender', value: coinSpentEvent.attributes[0].value,
    },
    {
      key: 'module', value: 'distribution',
    },
    {
      key: 'sender', value: coinReceivedEvent.attributes[0].value,
    },
  ]));

  events.push(buildEvent('transfer', [
    {
      key: 'recipient', value: coinReceivedEvent.attributes[0].value,
    },
    {
      key: 'sender', value: coinSpentEvent.attributes[0].value,
    },
    {
      key: 'amount', value: coinReceivedEvent.attributes[1].value,
    },
  ]));

  events.push(buildEvent('withdraw_rewards', [
    {
      key: 'amount', value: coinReceivedEvent.attributes[1].value,
    },
    {
      key: 'validator', value: delegateMsg.validator_address,
    },
  ]));

  return [withdrawMsg, events];
};

const buildEvent = (eventType: any, attributes: any) => {
  return {
    type: eventType,
    attributes,
  };
};
