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

export type NewConversion = ContractEventLog<{
  index: string;
  from: string;
  to: string;
  amount: string;
  feePcnt: string;
  timeStamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type ConversionCompleted = ContractEventLog<{
  id: string;
  0: string;
}>;
export type ConversionRefunded = ContractEventLog<{
  id: string;
  0: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface MXXConverter extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): MXXConverter;
  clone(): MXXConverter;
  methods: {
    availableMxxAmt(): NonPayableTransactionObject<string>;

    refund(_index: number | string): NonPayableTransactionObject<void>;

    index(): NonPayableTransactionObject<string>;

    setFee(_fee: number | string): NonPayableTransactionObject<void>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    feePcnt(): NonPayableTransactionObject<string>;

    allConversions(
      arg0: number | string
    ): NonPayableTransactionObject<{
      amount: string;
      feePcnt: string;
      fromAddress: string;
      toAddress: string;
      startTime: string;
      endTime: string;
      status: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
    }>;

    owner(): NonPayableTransactionObject<string>;

    isOwner(): NonPayableTransactionObject<boolean>;

    completeConversion(
      _index: number | string
    ): NonPayableTransactionObject<void>;

    MXX_ADDRESS(): NonPayableTransactionObject<string>;

    depositForConversion(
      _toBscAddress: string,
      _amount: number | string
    ): NonPayableTransactionObject<void>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    BURN_ADDRESS(): NonPayableTransactionObject<string>;
  };
  events: {
    NewConversion(cb?: Callback<NewConversion>): EventEmitter;
    NewConversion(
      options?: EventOptions,
      cb?: Callback<NewConversion>
    ): EventEmitter;

    ConversionCompleted(cb?: Callback<ConversionCompleted>): EventEmitter;
    ConversionCompleted(
      options?: EventOptions,
      cb?: Callback<ConversionCompleted>
    ): EventEmitter;

    ConversionRefunded(cb?: Callback<ConversionRefunded>): EventEmitter;
    ConversionRefunded(
      options?: EventOptions,
      cb?: Callback<ConversionRefunded>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "NewConversion", cb: Callback<NewConversion>): void;
  once(
    event: "NewConversion",
    options: EventOptions,
    cb: Callback<NewConversion>
  ): void;

  once(event: "ConversionCompleted", cb: Callback<ConversionCompleted>): void;
  once(
    event: "ConversionCompleted",
    options: EventOptions,
    cb: Callback<ConversionCompleted>
  ): void;

  once(event: "ConversionRefunded", cb: Callback<ConversionRefunded>): void;
  once(
    event: "ConversionRefunded",
    options: EventOptions,
    cb: Callback<ConversionRefunded>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}
