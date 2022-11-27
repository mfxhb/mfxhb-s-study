/*
 * @Author: mfxhb
 * @Date: 2022-11-27 10:21:26
 * @LastEditTime: 2022-11-27 11:24:31
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'xiaolin',
      name: 'xiaolin.sid',
      rolling: true,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
