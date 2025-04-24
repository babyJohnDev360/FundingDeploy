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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("../common/DTO/create-user.dto");
const auth_guard_1 = require("../common/auth/guard/auth.guard");
const extract_token_1 = require("../common/auth/decorator/extract.token");
const fundAllot_user_dto_1 = require("../common/DTO/fundAllot-user.dto");
const serviceFee_user_dto_1 = require("../common/DTO/serviceFee-user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    SignUp(userAdminId, createUserDto) {
        return this.userService.SignUp(userAdminId, createUserDto);
    }
    Login(loginUserDto) {
        return this.userService.login(loginUserDto);
    }
    AdminLogin(loginUserDto) {
        return this.userService.adminLogin(loginUserDto);
    }
    EditUser(userId, updateUserDto) {
        return this.userService.edit(userId, updateUserDto);
    }
    remove(userId) {
        return this.userService.remove(userId);
    }
    list(userId, UserListDto) {
        return this.userService.list(userId, UserListDto);
    }
    userNameList(userId, UserListDto) {
        return this.userService.userNameList(userId, UserListDto);
    }
    AddFund(userAdminId, CreateFundAllotDto) {
        return this.userService.addfundAllot(userAdminId, CreateFundAllotDto);
    }
    UpdateFund(userId, UpdateFundAllotDto) {
        return this.userService.updateFund(userId, UpdateFundAllotDto);
    }
    removeFund(body) {
        return this.userService.removeFund(body.fundId);
    }
    GetFund(userId, fundAllotQueryDto) {
        return this.userService.getFund(userId, fundAllotQueryDto);
    }
    getFundByUserId(FundAllotQueryByUserDto) {
        return this.userService.getFundByUserId(FundAllotQueryByUserDto);
    }
    AddserviceFee(userAdminId, CreateServiceFeeDto) {
        return this.userService.addserviceFee(userAdminId, CreateServiceFeeDto);
    }
    UpdateServiceFee(userAdminId, UpdateServiceFeeDto) {
        return this.userService.updateServiceFee(userAdminId, UpdateServiceFeeDto);
    }
    RemoveServiceFee(body) {
        return this.userService.removeServiceFee(body.serviceFeeId);
    }
    GetServiceFee(userId, getServiceFeeDto) {
        return this.userService.getServiceFee(userId, getServiceFeeDto);
    }
    getServiceFeeByUserId(userId, UserListDto) {
        return this.userService.getServiceFeeByUserId(UserListDto);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "SignUp", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "Login", null);
__decorate([
    (0, common_1.Post)('adminLogin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "AdminLogin", null);
__decorate([
    (0, common_1.Post)('edit'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "EditUser", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('list'),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, fundAllot_user_dto_1.UserListDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "list", null);
__decorate([
    (0, common_1.Post)('userNameList'),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, fundAllot_user_dto_1.UserListDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "userNameList", null);
__decorate([
    (0, common_1.Post)('addFund'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, fundAllot_user_dto_1.CreateFundAllotDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "AddFund", null);
__decorate([
    (0, common_1.Post)('updateFund'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, fundAllot_user_dto_1.UpdateFundAllotDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "UpdateFund", null);
__decorate([
    (0, common_1.Delete)('removeFund'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "removeFund", null);
__decorate([
    (0, common_1.Get)('getFund'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, fundAllot_user_dto_1.FundAllotQueryDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "GetFund", null);
__decorate([
    (0, common_1.Post)('getFundByUserId'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fundAllot_user_dto_1.FundAllotQueryByUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getFundByUserId", null);
__decorate([
    (0, common_1.Post)('addserviceFee'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, serviceFee_user_dto_1.CreateServiceFeeDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "AddserviceFee", null);
__decorate([
    (0, common_1.Post)('updateServiceFee'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, serviceFee_user_dto_1.UpdateServiceFeeDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "UpdateServiceFee", null);
__decorate([
    (0, common_1.Delete)('removeServiceFee'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "RemoveServiceFee", null);
__decorate([
    (0, common_1.Get)('getServiceFee'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, serviceFee_user_dto_1.getServiceFeeDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "GetServiceFee", null);
__decorate([
    (0, common_1.Post)('getServiceFeeByUserId'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, extract_token_1.ExtractUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, fundAllot_user_dto_1.UserListDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getServiceFeeByUserId", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map