import { Types } from "mongoose";
export declare enum FundType {
    ADD = "add",
    REMOVE = "remove"
}
export declare class FundAllot {
    transactionId: string;
    amount: number;
    type: string;
    balance: number;
    source: string;
    userId: Types.ObjectId;
}
export declare const FundAllotSchema: import("mongoose").Schema<FundAllot, import("mongoose").Model<FundAllot, any, any, any, import("mongoose").Document<unknown, any, FundAllot> & FundAllot & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FundAllot, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FundAllot>> & import("mongoose").FlatRecord<FundAllot> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
