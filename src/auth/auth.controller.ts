/*
 * @Author: mfxhb
 * @Date: 2022-11-27 11:20:50
 * @LastEditTime: 2022-11-27 11:58:39
 * @Description:
 */
import { Body, Controller, Get, Post, Res, Session } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authSerice: AuthService) {}

  @Get('code')
  getAuthcode(@Res() res, @Session() session) {
    const { data, text } = this.authSerice.getAuthcode();
    session.code = text;
    res.type('image/svg+xml');
    res.send(data);
  }
  @Post('check')
  checkUser(@Body() body, @Session() session) {
    const code = session.code.toLowerCase();
    const userCode = body.authcode.toLowerCase();
    if (!userCode) {
      return {
        code: 400,
        message: '无效cookie',
      };
    } else if (code === userCode) {
      return this.authSerice.checkUser(body);
    } else {
      return {
        code: 400,
        message: '验证码错误',
      };
    }
  }
}
