export declare class CreateServiceFeeDto {
    type: string;
    amount: number;
    userId: string;
}
export declare class UpdateServiceFeeDto {
    serviceFeeId?: string;
    type?: string;
    userId?: string;
    amount?: number;
}
export declare class getServiceFeeDto {
    userId?: string;
}
