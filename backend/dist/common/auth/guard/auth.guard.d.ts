import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from 'src/common/Schema/user.schema';
export declare class AuthGuard implements CanActivate {
    private userSchema;
    private jwtService;
    constructor(userSchema: Model<User>, jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
