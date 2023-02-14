import numeral from 'numeral';
import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgCreateValidator {
  public category: Categories;

  public type: string;

  public description: {
    moniker: string;
    identity: string;
    website: string;
    securityContact: string;
    details: string;
  };

  public commission: {
    rate: number | null;
    maxRate: number | null;
    maxChangeRate: number | null;
  };

  public minSelfDelegation: string | number;

  public delegatorAddress: string;

  public validatorAddress: string;

  public pubkey: {
    type: string;
    key: string;
  };

  public value: MsgCoin;

  public json: object;

  constructor(payload: object) {
    this.category = 'staking';
    this.type = R.pathOr('', ['type'], payload);
    this.description = R.pathOr(
      { moniker: '', identity: '', website: '', securityContact: '', details: '' },
      ['description'],
      payload
    );
    this.commission = R.pathOr({ rate: 0, maxRate: 0, maxChangeRate: 0 }, ['commission'], payload);
    this.minSelfDelegation = R.pathOr('', ['minSelfDelegation'], payload);
    this.delegatorAddress = R.pathOr('', ['delegatorAddress'], payload);
    this.validatorAddress = R.pathOr('', ['validatorAddress'], payload);
    this.pubkey = R.pathOr({ type: '', key: '' }, ['pubkey'], payload);
    this.value = R.pathOr({ denom: '', amount: '0' }, ['value'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgCreateValidator {
    return {
      category: 'staking',
      json,
      type: R.pathOr('', ['@type'], json),
      description: {
        moniker: R.pathOr('', ['description', 'moniker'], json),
        identity: R.pathOr('', ['description', 'identity'], json),
        website: R.pathOr('', ['description', 'website'], json),
        securityContact: R.pathOr('', ['description', 'security_contact'], json),
        details: R.pathOr('', ['description', 'details'], json),
      },
      commission: {
        rate: numeral(R.pathOr('0', ['commission', 'rate'], json)).value(),
        maxRate: numeral(R.pathOr('0', ['commission', 'max_rate'], json)).value(),
        maxChangeRate: numeral(R.pathOr('0', ['commission', 'max_change_rate'], json)).value(),
      },
      minSelfDelegation: R.pathOr('', ['min_self_delegation'], json),
      delegatorAddress: R.pathOr('', ['delegator_address'], json),
      validatorAddress: R.pathOr('', ['validator_address'], json),
      pubkey: {
        type: R.pathOr('', ['pubkey', '@type'], json),
        key: R.pathOr('', ['pubkey', 'key'], json),
      },
      value: {
        denom: R.pathOr('', ['value', 'denom'], json),
        amount: R.pathOr('0', ['value', 'amount'], json),
      },
    };
  }
}

export default MsgCreateValidator;
