import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from '../common/DTO/create-user.dto';
import { CreateFundAllotDto, FundAllotQueryByUserDto, FundAllotQueryDto, UpdateFundAllotDto, UserListDto } from 'src/common/DTO/fundAllot-user.dto';
import { CreateServiceFeeDto, getServiceFeeDto, UpdateServiceFeeDto } from 'src/common/DTO/serviceFee-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    SignUp(userAdminId: string, createUserDto: CreateUserDto): Promise<{
        status: boolean;
        message: string;
        userId?: undefined;
    } | {
        status: boolean;
        message: string;
        userId: import("mongoose").Types.ObjectId;
    }>;
    Login(loginUserDto: LoginUserDto): Promise<{
        status: boolean;
        messsage: string;
        token?: undefined;
    } | {
        status: boolean;
        messsage: string;
        token: string;
    }>;
    AdminLogin(loginUserDto: LoginUserDto): Promise<{
        status: boolean;
        messsage: string;
        token?: undefined;
    } | {
        status: boolean;
        messsage: string;
        token: string;
    }>;
    EditUser(userId: string, updateUserDto: UpdateUserDto): Promise<{
        status: boolean;
        message: string;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        message?: undefined;
    }>;
    remove(userId: string): Promise<{
        status: boolean;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
    }>;
    list(userId: string, UserListDto: UserListDto): Promise<{
        status: boolean;
        total: number;
        users: (import("mongoose").Document<unknown, {}, import("../common/Schema/user.schema").User> & import("../common/Schema/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        total?: undefined;
        users?: undefined;
    }>;
    userNameList(userId: any, UserListDto: UserListDto): Promise<{
        status: boolean;
        message: string;
        total?: undefined;
        users?: undefined;
        error?: undefined;
    } | {
        status: boolean;
        total: number;
        users: (import("mongoose").Document<unknown, {}, import("../common/Schema/user.schema").User> & import("../common/Schema/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        message?: undefined;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        message?: undefined;
        total?: undefined;
        users?: undefined;
    }>;
    AddFund(userAdminId: string, CreateFundAllotDto: CreateFundAllotDto): Promise<{
        status: boolean;
        message: any;
    }>;
    UpdateFund(userId: string, UpdateFundAllotDto: UpdateFundAllotDto): Promise<{
        status: boolean;
        message: any;
    }>;
    removeFund(body: {
        fundId: string;
    }): Promise<{
        status: boolean;
        message: any;
    }>;
    GetFund(userId: string, fundAllotQueryDto: FundAllotQueryDto): Promise<{
        status: boolean;
        data: (import("mongoose").Document<unknown, {}, import("../common/Schema/fundAllot.schema").FundAllot> & import("../common/Schema/fundAllot.schema").FundAllot & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        message?: undefined;
    } | {
        status: boolean;
        message: any;
        data?: undefined;
    }>;
    getFundByUserId(FundAllotQueryByUserDto: FundAllotQueryByUserDto): Promise<{
        status: boolean;
        total: number;
        data: (import("mongoose").Document<unknown, {}, import("../common/Schema/fundAllot.schema").FundAllot> & import("../common/Schema/fundAllot.schema").FundAllot & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        message?: undefined;
    } | {
        status: boolean;
        message: any;
        total?: undefined;
        data?: undefined;
    }>;
    AddserviceFee(userAdminId: string, CreateServiceFeeDto: CreateServiceFeeDto): Promise<{
        status: boolean;
        message: any;
    }>;
    UpdateServiceFee(userAdminId: string, UpdateServiceFeeDto: UpdateServiceFeeDto): Promise<{
        status: boolean;
        message: any;
    }>;
    RemoveServiceFee(body: {
        serviceFeeId: string;
    }): Promise<{
        status: boolean;
        message: any;
    }>;
    GetServiceFee(userId: string, getServiceFeeDto: getServiceFeeDto): Promise<{
        status: boolean;
        data: {
            serviceFeesPayable: number;
            serviceFeePaid: any;
            creditNoteApplied: any;
            goodWillApplied: any;
            balancePayable: number;
            transaction: (import("mongoose").Document<unknown, {}, import("../common/Schema/serviceFee.schema").ServiceFee> & import("../common/Schema/serviceFee.schema").ServiceFee & {
                _id: import("mongoose").Types.ObjectId;
            })[];
        };
        message?: undefined;
    } | {
        status: boolean;
        message: any;
        data?: undefined;
    }>;
    getServiceFeeByUserId(userId: string, UserListDto: UserListDto): Promise<{
        status: boolean;
        data: (import("mongoose").Document<unknown, {}, import("../common/Schema/serviceFee.schema").ServiceFee> & import("../common/Schema/serviceFee.schema").ServiceFee & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        message?: undefined;
    } | {
        status: boolean;
        message: any;
        data?: undefined;
    }>;
}
