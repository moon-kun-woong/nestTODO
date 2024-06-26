import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MorganMiddleware } from '@nest-middlewares/morgan';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cats/entity/cats.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 13306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Cat],
      synchronize: true,
    }),
    CatsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    MorganMiddleware.configure('dev');
    consumer
      .apply(MorganMiddleware)
      .forRoutes('cats')
  }
}
