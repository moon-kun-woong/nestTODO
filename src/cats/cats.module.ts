import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entity/cats.entity';

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
    TypeOrmModule.forFeature([Cat])
  ],
  exports: [TypeOrmModule],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule { }
