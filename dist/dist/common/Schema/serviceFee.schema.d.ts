import { Types } from "mongoose";
export declare class Transaction {
    data: Date;
    type: string;
    amount: number;
}
export declare const TransactionSchema: any;
export declare class ServiceFee {
    serviceFeePayable: number;
    serviceFeePaid: number;
    creditNoteApplied: number;
    goodwillGesture: number;
    balancePayable: number;
    userId: Types.ObjectId;
    transaction: Transaction[];
}
export declare const ServiceFeeSchema: any;
