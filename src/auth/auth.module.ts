/*
 * @Author: mfxhb
 * @Date: 2022-11-27 11:20:36
 * @LastEditTime: 2022-11-27 11:21:00
 * @Description:
 */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
