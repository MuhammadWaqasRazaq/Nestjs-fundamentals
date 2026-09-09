import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { Middleware3 } from './middlewares/middleware3.js';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule{
  configure( consumer: MiddlewareConsumer ) {
    consumer.apply(Middleware3).forRoutes('user')
  }
}