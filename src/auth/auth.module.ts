import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './security/passport.jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: 'SECRET',
            signOptions: { expiresIn: '300s' },
        }),
        PassportModule
    ],
    exports: [TypeOrmModule],
    controllers: [AuthController],
    providers: [AuthService, UserService, JwtStrategy]
})
export class AuthModule {}
