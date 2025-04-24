import { Types } from 'mongoose';
export declare class CreateFundAllotDto {
    userId: string;
    amount: number;
    type: "add" | "remove";
    balance: string;
    source: string;
}
export declare class UserListDto {
    userId: string;
    limit: number;
    page: number;
    search: string;
}
export declare class UpdateFundAllotDto {
    fundId: string;
    amount?: number;
    type?: string;
    balance?: number;
    source?: string;
    userId?: Types.ObjectId;
}
export declare class FundAllotQueryDto {
    userId?: Types.ObjectId;
    source?: string;
    limit?: number;
    page?: number;
}
export declare class FundAllotQueryByUserDto {
    userId?: string;
    source?: string;
    limit?: number;
    page?: number;
}
