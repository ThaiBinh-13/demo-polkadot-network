/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type AssetConfigUpdated = ContractEventLog<{
  asset: string;
  emission: string;
  0: string;
  1: string;
}>;
export type AssetIndexUpdated = ContractEventLog<{
  asset: string;
  index: string;
  0: string;
  1: string;
}>;
export type Cooldown = ContractEventLog<{
  user: string;
  0: string;
}>;
export type Redeem = ContractEventLog<{
  from: string;
  to: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type RewardsAccrued = ContractEventLog<{
  user: string;
  amount: string;
  0: string;
  1: string;
}>;
export type RewardsClaimed = ContractEventLog<{
  from: string;
  to: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type SnapshotDone = ContractEventLog<{
  owner: string;
  oldValue: string;
  newValue: string;
  0: string;
  1: string;
  2: string;
}>;
export type Staked = ContractEventLog<{
  from: string;
  onBehalfOf: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type UserIndexUpdated = ContractEventLog<{
  user: string;
  asset: string;
  index: string;
  0: string;
  1: string;
  2: string;
}>;

export interface StakedbMXX extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): StakedbMXX;
  clone(): StakedbMXX;
  methods: {
    approve(
      spender: string,
      amount: number | string
    ): NonPayableTransactionObject<boolean>;

    claimRewards(
      to: string,
      amount: number | string
    ): NonPayableTransactionObject<void>;

    configureAssets(
      assetsConfigInput: [number | string, number | string, string][]
    ): NonPayableTransactionObject<void>;

    cooldown(): NonPayableTransactionObject<void>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string
    ): NonPayableTransactionObject<boolean>;

    getNextCooldownTimestamp(
      fromCooldownTimestamp: number | string,
      amountToReceive: number | string,
      toAddress: string,
      toBalance: number | string
    ): NonPayableTransactionObject<string>;

    increaseAllowance(
      spender: string,
      addedValue: number | string
    ): NonPayableTransactionObject<boolean>;

    initialize(
      bMXXGovernance: string,
      name: string,
      symbol: string,
      decimals: number | string
    ): NonPayableTransactionObject<void>;

    redeem(
      to: string,
      amount: number | string
    ): NonPayableTransactionObject<void>;

    stake(
      onBehalfOf: string,
      amount: number | string
    ): NonPayableTransactionObject<void>;

    transfer(
      recipient: string,
      amount: number | string
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: number | string
    ): NonPayableTransactionObject<boolean>;

    _bMXXGovernance(): NonPayableTransactionObject<string>;

    _countsSnapshots(arg0: string): NonPayableTransactionObject<string>;

    _snapshots(
      arg0: string,
      arg1: number | string
    ): NonPayableTransactionObject<{
      blockNumber: string;
      value: string;
      0: string;
      1: string;
    }>;

    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    assets(
      arg0: string
    ): NonPayableTransactionObject<{
      emissionPerSecond: string;
      lastUpdateTimestamp: string;
      index: string;
      0: string;
      1: string;
      2: string;
    }>;

    balanceOf(account: string): NonPayableTransactionObject<string>;

    COOLDOWN_SECONDS(): NonPayableTransactionObject<string>;

    decimals(): NonPayableTransactionObject<string>;

    DISTRIBUTION_END(): NonPayableTransactionObject<string>;

    EMISSION_MANAGER(): NonPayableTransactionObject<string>;

    getTotalRewardsBalance(staker: string): NonPayableTransactionObject<string>;

    getUserAssetData(
      user: string,
      asset: string
    ): NonPayableTransactionObject<string>;

    name(): NonPayableTransactionObject<string>;

    PRECISION(): NonPayableTransactionObject<string>;

    REVISION(): NonPayableTransactionObject<string>;

    REWARD_TOKEN(): NonPayableTransactionObject<string>;

    REWARDS_VAULT(): NonPayableTransactionObject<string>;

    STAKED_TOKEN(): NonPayableTransactionObject<string>;

    stakerRewardsToClaim(arg0: string): NonPayableTransactionObject<string>;

    stakersCooldowns(arg0: string): NonPayableTransactionObject<string>;

    symbol(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    UNSTAKE_WINDOW(): NonPayableTransactionObject<string>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    AssetConfigUpdated(cb?: Callback<AssetConfigUpdated>): EventEmitter;
    AssetConfigUpdated(
      options?: EventOptions,
      cb?: Callback<AssetConfigUpdated>
    ): EventEmitter;

    AssetIndexUpdated(cb?: Callback<AssetIndexUpdated>): EventEmitter;
    AssetIndexUpdated(
      options?: EventOptions,
      cb?: Callback<AssetIndexUpdated>
    ): EventEmitter;

    Cooldown(cb?: Callback<Cooldown>): EventEmitter;
    Cooldown(options?: EventOptions, cb?: Callback<Cooldown>): EventEmitter;

    Redeem(cb?: Callback<Redeem>): EventEmitter;
    Redeem(options?: EventOptions, cb?: Callback<Redeem>): EventEmitter;

    RewardsAccrued(cb?: Callback<RewardsAccrued>): EventEmitter;
    RewardsAccrued(
      options?: EventOptions,
      cb?: Callback<RewardsAccrued>
    ): EventEmitter;

    RewardsClaimed(cb?: Callback<RewardsClaimed>): EventEmitter;
    RewardsClaimed(
      options?: EventOptions,
      cb?: Callback<RewardsClaimed>
    ): EventEmitter;

    SnapshotDone(cb?: Callback<SnapshotDone>): EventEmitter;
    SnapshotDone(
      options?: EventOptions,
      cb?: Callback<SnapshotDone>
    ): EventEmitter;

    Staked(cb?: Callback<Staked>): EventEmitter;
    Staked(options?: EventOptions, cb?: Callback<Staked>): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    UserIndexUpdated(cb?: Callback<UserIndexUpdated>): EventEmitter;
    UserIndexUpdated(
      options?: EventOptions,
      cb?: Callback<UserIndexUpdated>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "AssetConfigUpdated", cb: Callback<AssetConfigUpdated>): void;
  once(
    event: "AssetConfigUpdated",
    options: EventOptions,
    cb: Callback<AssetConfigUpdated>
  ): void;

  once(event: "AssetIndexUpdated", cb: Callback<AssetIndexUpdated>): void;
  once(
    event: "AssetIndexUpdated",
    options: EventOptions,
    cb: Callback<AssetIndexUpdated>
  ): void;

  once(event: "Cooldown", cb: Callback<Cooldown>): void;
  once(event: "Cooldown", options: EventOptions, cb: Callback<Cooldown>): void;

  once(event: "Redeem", cb: Callback<Redeem>): void;
  once(event: "Redeem", options: EventOptions, cb: Callback<Redeem>): void;

  once(event: "RewardsAccrued", cb: Callback<RewardsAccrued>): void;
  once(
    event: "RewardsAccrued",
    options: EventOptions,
    cb: Callback<RewardsAccrued>
  ): void;

  once(event: "RewardsClaimed", cb: Callback<RewardsClaimed>): void;
  once(
    event: "RewardsClaimed",
    options: EventOptions,
    cb: Callback<RewardsClaimed>
  ): void;

  once(event: "SnapshotDone", cb: Callback<SnapshotDone>): void;
  once(
    event: "SnapshotDone",
    options: EventOptions,
    cb: Callback<SnapshotDone>
  ): void;

  once(event: "Staked", cb: Callback<Staked>): void;
  once(event: "Staked", options: EventOptions, cb: Callback<Staked>): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;

  once(event: "UserIndexUpdated", cb: Callback<UserIndexUpdated>): void;
  once(
    event: "UserIndexUpdated",
    options: EventOptions,
    cb: Callback<UserIndexUpdated>
  ): void;
}
