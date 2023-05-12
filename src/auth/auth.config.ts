import { ConfigType, registerAs } from '@nestjs/config';

export const authConfig = registerAs('auth', () => ({
  jwtSecret: process.env.JWT_SECRET,
}));

export type AuthConfigType = ConfigType<typeof authConfig>;
