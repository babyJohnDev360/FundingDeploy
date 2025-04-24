export declare class BankDetails {
    name: string;
    accountNo: string;
    branch: string;
    ifsc: string;
}
export declare const BankDetailsSchema: import("mongoose").Schema<BankDetails, import("mongoose").Model<BankDetails, any, any, any, import("mongoose").Document<unknown, any, BankDetails> & BankDetails & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BankDetails, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<BankDetails>> & import("mongoose").FlatRecord<BankDetails> & {
    _id: import("mongoose").Types.ObjectId;
}>;
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
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
}>;
