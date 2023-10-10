import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useEffect, useRef, useState } from 'react';
import chainConfig from '@/chainConfig';
import { convertMsgsToModels } from '@/components/msg/utils';
import {
  GetMessagesByAddressQuery,
  useGetMessagesByAddressQuery,
} from '@/graphql/types/general_types';
import {
  useValidatorAddressesQuery,
  useValidatorConsensusAddressesListQuery,
  useValidatorProviderOperatorAddressesListQuery,
} from '@/graphql/types/provider_types';
import type { TransactionState } from '@/screens/account_details/components/transactions/types';
import { convertMsgType } from '@/utils/convert_msg_type';

const LIMIT = 50;

const formatTransactions = (data: GetMessagesByAddressQuery): Transactions[] => {
  let formattedData = data.messagesByAddress;
  if (data.messagesByAddress.length === 51) {
    formattedData = data.messagesByAddress.slice(0, 51);
  }
  return formattedData.map((x) => {
    const { transaction } = x;

    // =============================
    // messages
    // =============================
    const messages = convertMsgsToModels(transaction);
    const msgType = messages.map((eachMsg) => {
      const eachMsgType = eachMsg?.type ?? 'none type';
      return eachMsgType ?? '';
    });
    const convertedMsgType = convertMsgType(msgType);
    return {
      height: transaction?.height,
      hash: transaction?.hash ?? '',
      type: convertedMsgType,
      messages: {
        count: messages.length,
        items: messages,
      },
      success: transaction?.success ?? false,
      timestamp: transaction?.block.timestamp,
    };
  });
};

export function useTransactions() {
  const { prefix } = chainConfig();
  const router = useRouter();
  const [state, setState] = useState<TransactionState>({
    data: [],
    hasNextPage: false,
    isNextPageLoading: true,
    offsetCount: 0,
  });
  const isFirst = useRef(true);

  const address = Array.isArray(router?.query?.address)
    ? router.query.address[0]
    : router?.query?.address ?? '';

  const [consumerAccountAddress, setConsumerAccountAddress] = useState(address);

  const { data: addresses } = useValidatorConsensusAddressesListQuery({ variables: { address } });

  const { data: cosmosvaloperAddresses } = useValidatorProviderOperatorAddressesListQuery({
    variables: { address },
  });

  const { data: valAddressesInfo } = useValidatorAddressesQuery();

  useEffect(() => {
    let consumer = '';
    if (valAddressesInfo?.ccv_validator) {
      if (address.startsWith(prefix.consensus)) {
        if (addresses) {
          consumer = addresses.ccv_validator?.[0].consumer_self_delegate_address;
        } else {
          consumer = address;
        }
        setConsumerAccountAddress(consumer);
      } else if (address.startsWith('cosmosvaloper')) {
        if (cosmosvaloperAddresses) {
          consumer = cosmosvaloperAddresses.ccv_validator?.[0].consumer_self_delegate_address;
        } else {
          consumer = address;
        }
        setConsumerAccountAddress(consumer);
      }
    }
  }, [
    address,
    addresses,
    cosmosvaloperAddresses,
    prefix.account,
    prefix.consensus,
    valAddressesInfo,
  ]);

  // reset state when address changes
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
    } else {
      setState((prevState) => ({
        ...prevState,
        data: [],
        hasNextPage: false,
        isNextPageLoading: true,
        offsetCount: 0,
      }));
    }
  }, [consumerAccountAddress]);

  const handleSetState = (stateChange: (prevState: TransactionState) => TransactionState) => {
    setState((prevState) => {
      const newState = stateChange(prevState);
      return R.equals(prevState, newState) ? prevState : newState;
    });
  };

  const { fetchMore } = useGetMessagesByAddressQuery({
    variables: {
      limit: LIMIT + 1, // to check if more exist
      offset: 0,
      address: `{${consumerAccountAddress ?? ''}}`,
    },
    onCompleted: (data) => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = R.uniq([...state.data, ...formatTransactions(data)]);
      const stateChange: TransactionState = {
        data: newItems,
        hasNextPage: itemsLength === 51,
        isNextPageLoading: false,
        offsetCount: state.offsetCount + LIMIT,
      };

      handleSetState((prevState) => ({ ...prevState, ...stateChange }));
    },
  });

  const loadNextPage = async () => {
    handleSetState((prevState) => ({ ...prevState, isNextPageLoading: true }));
    // refetch query
    await fetchMore({
      variables: {
        offset: state.offsetCount,
        limit: LIMIT + 1,
      },
    }).then(({ data }) => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = R.uniq([...state.data, ...formatTransactions(data)]);
      const stateChange: TransactionState = {
        data: newItems,
        hasNextPage: itemsLength === 51,
        isNextPageLoading: false,
        offsetCount: state.offsetCount + LIMIT,
      };
      handleSetState((prevState) => ({ ...prevState, ...stateChange }));
    });
  };

  return {
    state,
    loadNextPage,
  };
}
