import { Types } from "mongoose";
export declare class Transaction {
    data: Date;
    type: string;
    amount: number;
}
export declare const TransactionSchema: import("mongoose").Schema<Transaction, import("mongoose").Model<Transaction, any, any, any, import("mongoose").Document<unknown, any, Transaction> & Transaction & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Transaction, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Transaction>> & import("mongoose").FlatRecord<Transaction> & {
    _id: Types.ObjectId;
}>;
export declare class ServiceFee {
    serviceFeePayable: number;
    serviceFeePaid: number;
    creditNoteApplied: number;
    goodwillGesture: number;
    balancePayable: number;
    userId: Types.ObjectId;
    transaction: Transaction[];
}
export declare const ServiceFeeSchema: import("mongoose").Schema<ServiceFee, import("mongoose").Model<ServiceFee, any, any, any, import("mongoose").Document<unknown, any, ServiceFee> & ServiceFee & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ServiceFee, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ServiceFee>> & import("mongoose").FlatRecord<ServiceFee> & {
    _id: Types.ObjectId;
}>;
