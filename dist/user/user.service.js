"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../common/Schema/user.schema");
const mongoose_2 = require("mongoose");
const crypto = require("crypto");
const auth_service_1 = require("../common/auth/auth.service");
const fundAllot_schema_1 = require("../common/Schema/fundAllot.schema");
const serviceFee_schema_1 = require("../common/Schema/serviceFee.schema");
let UserService = class UserService {
    constructor(UserModel, FundAllotModel, ServiceFeeModel, authservice) {
        this.UserModel = UserModel;
        this.FundAllotModel = FundAllotModel;
        this.ServiceFeeModel = ServiceFeeModel;
        this.authservice = authservice;
    }
    async SignUp(userAdminId, createUserDto) {
        try {
            const isAdmin = await this.checkUser(userAdminId);
            if (!isAdmin)
                return { status: false, message: "Only admin can add and update data" };
            const hashedPassword = crypto
                .createHash('sha256')
                .update(createUserDto.password)
                .digest('hex');
            const data = Object.assign(Object.assign({}, createUserDto), { password: hashedPassword });
            const newUser = await this.UserModel.create(data);
            return {
                status: true,
                message: 'User Created Successfull',
                userId: newUser._id
            };
        }
        catch (error) {
            console.log(error.message);
        }
    }
    async login(loginUserDto) {
        try {
            const hashedPassword = crypto
                .createHash('sha256')
                .update(loginUserDto.password)
                .digest('hex');
            const checkUser = await this.UserModel.find({
                email: loginUserDto.email,
                password: hashedPassword,
            });
            if (!checkUser) {
                return {
                    status: false,
                    messsage: 'email or password is wrong ',
                };
            }
            const token = await this.authservice.createAccessToken(checkUser[0]);
            return {
                status: true,
                messsage: 'Login successfull',
                token,
            };
        }
        catch (error) {
            return {
                status: false,
                messsage: 'email or password is wrong ',
            };
        }
    }
    async adminLogin(loginUserDto) {
        try {
            const hashedPassword = crypto
                .createHash('sha256')
                .update(loginUserDto.password)
                .digest('hex');
            const checkUser = await this.UserModel.find({
                email: loginUserDto.email,
                password: hashedPassword,
            });
            if (!checkUser) {
                return {
                    status: false,
                    messsage: 'email or password is wrong ',
                };
            }
            console.log(checkUser, "============>");
            if (checkUser[0].role === "Admin") {
                let token = await this.authservice.createAccessToken(checkUser[0]);
                return {
                    status: true,
                    messsage: 'Login successfull',
                    token,
                };
            }
            else {
                return {
                    status: false,
                    messsage: "Only Admin can Login",
                };
            }
        }
        catch (error) {
            return {
                status: false,
                messsage: 'email or password is wrong ',
            };
        }
    }
    async edit(userId, updateUserDto) {
        try {
            const updateData = await this.UserModel.findByIdAndUpdate(userId, {
                $set: Object.assign({}, updateUserDto),
            }, { new: true });
            console.log(updateData);
            return {
                status: true,
                message: 'Update Succssfully',
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async remove(userId) {
        try {
            const id = new mongoose_2.Types.ObjectId(userId);
            const remove = await this.UserModel.deleteOne(id);
            return { status: true };
        }
        catch (error) {
            console.log(error.message);
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async list(userId, UserListDto) {
        try {
            const isAdmin = await this.checkUser(userId);
            let payload;
            let skip = UserListDto.limit * UserListDto.page;
            let limit = UserListDto.limit;
            if (isAdmin) {
                if (UserListDto.userId) {
                    payload = { _id: new mongoose_2.default.Types.ObjectId(UserListDto.userId) };
                }
                else {
                    payload = {};
                }
                const users = await this.UserModel.find(payload)
                    .select({ password: 0 })
                    .skip(skip)
                    .limit(limit);
                const count = await this.UserModel.countDocuments();
                return {
                    status: true,
                    total: count,
                    users,
                };
            }
            else {
                const users = await this.UserModel.find({ _id: new mongoose_2.default.Types.ObjectId(userId) })
                    .select({ password: 0 })
                    .skip(skip)
                    .limit(limit);
                const count = await this.UserModel.countDocuments();
                return {
                    status: true,
                    total: count,
                    users,
                };
            }
        }
        catch (error) {
            console.log(error.message);
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async userNameList(UserId, UserListDto) {
        try {
            const isAdmin = await this.checkUser(UserId);
            if (!isAdmin)
                return { status: false, message: "Only admin can add and update data" };
            let payload = { _id: new mongoose_2.default.Types.ObjectId(UserId) };
            const searchQuery = [];
            if (UserListDto.search) {
                searchQuery.push({
                    $or: [
                        { clientId: { $regex: UserListDto.search, $options: 'i' } },
                        { name: { $regex: UserListDto.search, $options: 'i' } },
                        { email: { $regex: UserListDto.search, $options: 'i' } }
                    ]
                });
            }
            const users = await this.UserModel.find().select({ name: 1, _id: 1, clientId: 1 });
            const count = await this.UserModel.countDocuments();
            return {
                status: true,
                total: count,
                users,
            };
        }
        catch (error) {
            console.log(error.message);
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async addfundAllot(userAdminId, createFundAllotDto) {
        var _a;
        try {
            const isAdmin = await this.checkUser(userAdminId);
            if (!isAdmin)
                return { status: false, message: "Only admin can add and update data" };
            const getBalance = await this.getFund(createFundAllotDto.userId, {
                limit: 1,
                page: 1,
            });
            const existingBalance = ((_a = getBalance === null || getBalance === void 0 ? void 0 : getBalance.data[0]) === null || _a === void 0 ? void 0 : _a.balance) || 0;
            const balance = createFundAllotDto.type === 'add'
                ? existingBalance + createFundAllotDto.amount
                : existingBalance - createFundAllotDto.amount;
            const payload = Object.assign(Object.assign({}, createFundAllotDto), { balance });
            const createdFundAllot = await this.FundAllotModel.create(payload);
            return {
                status: true,
                message: 'Created Successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    async updateFund(userId, updateFundAllotDto) {
        try {
            const { fundId } = updateFundAllotDto, updateData = __rest(updateFundAllotDto, ["fundId"]);
            const updatedFundAllot = await this.FundAllotModel.findByIdAndUpdate(fundId, updateData, { new: true });
            if (!updatedFundAllot) {
                return {
                    status: false,
                    message: 'Fund Allotment not found',
                };
            }
            return {
                status: true,
                message: 'Updated Successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    async removeFund(fundId) {
        try {
            const result = await this.FundAllotModel.deleteOne({
                _id: new mongoose_2.default.Types.ObjectId(fundId),
            });
            if (result.deletedCount === 0) {
                return {
                    status: false,
                    message: 'Fund Allotment not found',
                };
            }
            return {
                status: true,
                message: 'Deleted Successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    async getFund(userId, fundAllotQueryDto) {
        try {
            const { limit = 50, page = 1 } = fundAllotQueryDto;
            const skip = (page - 1) * limit;
            const data = await this.FundAllotModel.find({ userId: userId })
                .sort({ updatedAt: -1 })
                .limit(limit)
                .skip(skip);
            return {
                status: true,
                data,
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    async getFundByUserId(FundAllotQueryByUserDto) {
        try {
            const { limit = 10, page = 0 } = FundAllotQueryByUserDto;
            const skip = page * limit;
            const data = await this.FundAllotModel.find({ userId: FundAllotQueryByUserDto.userId })
                .sort({ updatedAt: -1 })
                .limit(limit)
                .skip(skip);
            const count = await this.FundAllotModel.countDocuments({ userId: FundAllotQueryByUserDto.userId });
            return {
                status: true,
                total: count,
                data,
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    async addserviceFee(userAdminId, createServiceFeeDto) {
        try {
            const isAdmin = await this.checkUser(userAdminId);
            if (!isAdmin)
                return { status: false, message: "Only admin can add and update data" };
            const data = await this.ServiceFeeModel.create(createServiceFeeDto);
            return {
                status: true,
                message: 'Created Successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    async updateServiceFee(userAdminId, updateServiceFeeDto) {
        try {
            const { serviceFeeId } = updateServiceFeeDto, updateData = __rest(updateServiceFeeDto, ["serviceFeeId"]);
            const isAdmin = await this.checkUser(userAdminId);
            if (!isAdmin)
                return { status: false, message: "Only admin can add and update data" };
            const updatedFundAllot = await this.ServiceFeeModel.findByIdAndUpdate(serviceFeeId, updateData, { new: true });
            return {
                status: true,
                message: 'Updated Successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    async removeServiceFee(fundId) {
        try {
            const result = await this.ServiceFeeModel.deleteOne({
                _id: new mongoose_2.default.Types.ObjectId(fundId),
            });
            if (result.deletedCount === 0) {
                return {
                    status: false,
                    message: 'Fund Allotment not found',
                };
            }
            return {
                status: true,
                message: 'Deleted Successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    async getServiceFee(userId, getServiceFeeDto) {
        try {
            const serviceData = await this.ServiceFeeModel.aggregate([
                {
                    $match: { userId: userId }
                },
                {
                    $group: {
                        _id: "$type",
                        totalAmount: { $sum: "$amount" }
                    }
                }
            ]);
            const transaction = await this.ServiceFeeModel.find({ userId: userId });
            const feePaidData = serviceData.find(item => item._id === "fee_paid");
            const creditNoteData = serviceData.find(item => item._id === "credit_note");
            const goodwillData = serviceData.find(item => item._id === "goodwill");
            const totalAmount = serviceData.length > 0 ? serviceData[0].totalAmount : 0;
            const fundData = await this.FundAllotModel.find({ userId: userId })
                .sort({ updatedAt: -1 })
                .limit(1);
            let thirtyPercent = 0;
            if (fundData && fundData.length > 0) {
                const serviceFeePayable = fundData[0].balance;
                thirtyPercent = serviceFeePayable * 0.30;
            }
            const data = {
                serviceFeesPayable: thirtyPercent,
                serviceFeePaid: feePaidData ? feePaidData.totalAmount : 0,
                creditNoteApplied: creditNoteData ? creditNoteData.totalAmount : 0,
                goodWillApplied: goodwillData ? goodwillData.totalAmount : 0,
                balancePayable: thirtyPercent - ((feePaidData === null || feePaidData === void 0 ? void 0 : feePaidData.totalAmount) || 0) - ((creditNoteData === null || creditNoteData === void 0 ? void 0 : creditNoteData.totalAmount) || 0) - ((goodwillData === null || goodwillData === void 0 ? void 0 : goodwillData.totalAmount) || 0),
                transaction: transaction
            };
            return {
                status: true,
                data: data
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message
            };
        }
    }
    async getServiceFeeByUserId(fundAllotQueryDto) {
        try {
            const { limit = 50, page = 1 } = fundAllotQueryDto;
            const skip = (page - 1) * limit;
            const data = await this.ServiceFeeModel.find({ userId: fundAllotQueryDto.userId })
                .sort({ updatedAt: -1 });
            return {
                status: true,
                data,
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    async checkUser(userId) {
        try {
            const userData = await this.UserModel.findById(userId);
            console.log(userData, "userData ");
            if (userData.role === "Admin") {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            return {
                status: false,
                message: error.message
            };
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(fundAllot_schema_1.FundAllot.name)),
    __param(2, (0, mongoose_1.InjectModel)(serviceFee_schema_1.ServiceFee.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        auth_service_1.AuthService])
], UserService);
//# sourceMappingURL=user.service.js.map