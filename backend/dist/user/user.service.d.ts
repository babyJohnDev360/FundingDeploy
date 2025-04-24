import { FundAllotQueryByUserDto, UserListDto } from './../common/DTO/fundAllot-user.dto';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from '../common/DTO/create-user.dto';
import { User } from 'src/common/Schema/user.schema';
import mongoose, { Model, Types } from 'mongoose';
import { AuthService } from 'src/common/auth/auth.service';
import { FundAllot } from 'src/common/Schema/fundAllot.schema';
import { CreateFundAllotDto, FundAllotQueryDto, UpdateFundAllotDto } from 'src/common/DTO/fundAllot-user.dto';
import { ServiceFee } from 'src/common/Schema/serviceFee.schema';
import { CreateServiceFeeDto, getServiceFeeDto, UpdateServiceFeeDto } from 'src/common/DTO/serviceFee-user.dto';
export declare class UserService {
    private UserModel;
    private FundAllotModel;
    private ServiceFeeModel;
    private readonly authservice;
    constructor(UserModel: Model<User>, FundAllotModel: Model<FundAllot>, ServiceFeeModel: Model<ServiceFee>, authservice: AuthService);
    SignUp(userAdminId: any, createUserDto: CreateUserDto): Promise<{
        status: boolean;
        message: string;
        userId?: undefined;
    } | {
        status: boolean;
        message: string;
        userId: Types.ObjectId;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        status: boolean;
        messsage: string;
        token?: undefined;
    } | {
        status: boolean;
        messsage: string;
        token: string;
    }>;
    adminLogin(loginUserDto: LoginUserDto): Promise<{
        status: boolean;
        messsage: string;
        token?: undefined;
    } | {
        status: boolean;
        messsage: string;
        token: string;
    }>;
    edit(userId: any, updateUserDto: UpdateUserDto): Promise<{
        status: boolean;
        message: string;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        message?: undefined;
    }>;
    remove(userId: any): Promise<{
        status: boolean;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
    }>;
    list(userId: any, UserListDto: UserListDto): Promise<{
        status: boolean;
        total: number;
        users: (mongoose.Document<unknown, {}, User> & User & {
            _id: Types.ObjectId;
        })[];
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        total?: undefined;
        users?: undefined;
    }>;
    userNameList(UserId: any, UserListDto: any): Promise<{
        status: boolean;
        message: string;
        total?: undefined;
        users?: undefined;
        error?: undefined;
    } | {
        status: boolean;
        total: number;
        users: (mongoose.Document<unknown, {}, User> & User & {
            _id: Types.ObjectId;
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
    addfundAllot(userAdminId: any, createFundAllotDto: CreateFundAllotDto): Promise<{
        status: boolean;
        message: any;
    }>;
    updateFund(userId: any, updateFundAllotDto: UpdateFundAllotDto): Promise<{
        status: boolean;
        message: any;
    }>;
    removeFund(fundId: any): Promise<{
        status: boolean;
        message: any;
    }>;
    getFund(userId: any, fundAllotQueryDto: FundAllotQueryDto): Promise<{
        status: boolean;
        data: (mongoose.Document<unknown, {}, FundAllot> & FundAllot & {
            _id: Types.ObjectId;
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
        data: (mongoose.Document<unknown, {}, FundAllot> & FundAllot & {
            _id: Types.ObjectId;
        })[];
        message?: undefined;
    } | {
        status: boolean;
        message: any;
        total?: undefined;
        data?: undefined;
    }>;
    addserviceFee(userAdminId: any, createServiceFeeDto: CreateServiceFeeDto): Promise<{
        status: boolean;
        message: any;
    }>;
    updateServiceFee(userAdminId: any, updateServiceFeeDto: UpdateServiceFeeDto): Promise<{
        status: boolean;
        message: any;
    }>;
    removeServiceFee(fundId: any): Promise<{
        status: boolean;
        message: any;
    }>;
    getServiceFee(userId: any, getServiceFeeDto: getServiceFeeDto): Promise<{
        status: boolean;
        data: {
            serviceFeesPayable: number;
            serviceFeePaid: any;
            creditNoteApplied: any;
            goodWillApplied: any;
            balancePayable: number;
            transaction: (mongoose.Document<unknown, {}, ServiceFee> & ServiceFee & {
                _id: Types.ObjectId;
            })[];
        };
        message?: undefined;
    } | {
        status: boolean;
        message: any;
        data?: undefined;
    }>;
    getServiceFeeByUserId(fundAllotQueryDto: UserListDto): Promise<{
        status: boolean;
        data: (mongoose.Document<unknown, {}, ServiceFee> & ServiceFee & {
            _id: Types.ObjectId;
        })[];
        message?: undefined;
    } | {
        status: boolean;
        message: any;
        data?: undefined;
    }>;
    checkUser(userId: any): Promise<boolean | {
        status: boolean;
        message: any;
    }>;
}
