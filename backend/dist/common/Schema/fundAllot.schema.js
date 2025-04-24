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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundAllotSchema = exports.FundAllot = exports.FundType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
var FundType;
(function (FundType) {
    FundType["ADD"] = "add";
    FundType["REMOVE"] = "remove";
})(FundType || (exports.FundType = FundType = {}));
let FundAllot = class FundAllot {
};
exports.FundAllot = FundAllot;
__decorate([
    (0, mongoose_1.Prop)({ default: () => (0, uuid_1.v4)().slice(0, 6) }),
    __metadata("design:type", String)
], FundAllot.prototype, "transactionId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], FundAllot.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: FundType }),
    __metadata("design:type", String)
], FundAllot.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], FundAllot.prototype, "balance", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], FundAllot.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], FundAllot.prototype, "userId", void 0);
exports.FundAllot = FundAllot = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], FundAllot);
exports.FundAllotSchema = mongoose_1.SchemaFactory.createForClass(FundAllot);
//# sourceMappingURL=fundAllot.schema.js.map