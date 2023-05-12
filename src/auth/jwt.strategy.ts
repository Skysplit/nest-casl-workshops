import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { AuthConfigType, authConfig } from './auth.config';
import { UserService } from '@app/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject(authConfig.KEY) authConfig: AuthConfigType,
    private userService: UserService,
  ) {
    const config: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: authConfig.jwtSecret,
    };

    super(config);
  }

  async validate(payload: any) {
    return this.userService.findOrCreate({
      externalId: payload.sub,
      email: payload.email,
    });
  }
}
