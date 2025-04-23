import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get()
  getRoot(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', 'frontend', 'dist', 'flexy', 'index.html'));
  }
} 