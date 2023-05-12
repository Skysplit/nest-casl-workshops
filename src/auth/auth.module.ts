import { Module } from '@nestjs/common';
import { UserModule } from '@app/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { authConfig } from './auth.config';

@Module({
  imports: [UserModule, ConfigModule.forFeature(authConfig)],
  providers: [JwtStrategy],
})
export class AuthModule {}
