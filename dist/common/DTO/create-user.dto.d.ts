declare class BankDetailsDto {
    name?: string;
    accountNo?: string;
    branch?: string;
    ifsc?: string;
}
export declare class CreateUserDto {
    name: string;
    email: string;
    panNumber: string;
    password: string;
    clientId: string;
    isActive?: boolean;
    bankDetails: BankDetailsDto;
}
export declare class UpdateUserDto {
    name?: string;
    email?: string;
    panNumber?: string;
    password?: string;
    clientId: string;
    image?: string;
    isActive?: boolean;
    bankDetails?: BankDetailsDto;
}
export declare class LoginUserDto {
    email: string;
    password: string;
}
export {};
