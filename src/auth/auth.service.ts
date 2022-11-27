/*
 * @Author: mfxhb
 * @Date: 2022-11-27 11:20:43
 * @LastEditTime: 2022-11-27 11:58:32
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import * as svgCaptcha from 'svg-captcha';

@Injectable()
export class AuthService {
  getAuthcode() {
    const { data, text } = svgCaptcha.create({
      fontSize: 50,
      width: 300,
      height: 100,
      size: 4,
      background: '#25282f',
    });
    return { data, text };
  }
  checkUser(userinfo: { username: string; password: string }) {
    const username = 'admin';
    const password = 'admin123';
    if (userinfo.username === username && userinfo.password === password) {
      return {
        code: 200,
        message: '恭喜admin用户,登录成功',
      };
    } else {
      return {
        code: 400,
        message: '账号或者密码错误',
      };
    }
  }
}
