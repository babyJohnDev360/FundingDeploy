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
export declare const FundAllotSchema: any;
