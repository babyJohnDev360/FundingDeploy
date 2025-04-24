import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    createAccessToken(userInfo: any): Promise<string>;
}
