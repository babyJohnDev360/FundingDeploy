export declare class BankDetails {
    name: string;
    accountNo: string;
    branch: string;
    ifsc: string;
}
export declare const BankDetailsSchema: any;
export declare class User {
    name: string;
    email: string;
    panNo: string;
    password: string;
    clientId: string;
    panNumber: string;
    bankDetails: BankDetails;
    image: string;
    isActive: boolean;
    role: string;
}
export declare const UserSchema: any;
