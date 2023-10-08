import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //   secretOrKey: process.env.JWT_SECRET,
      ignoreExpiration: false,
      secretOrKey: 'monsecret',
    });
  }

  async validate(payload) {
    console.log(payload);

    const { id } = payload.id;
    console.log(id);

    const user = await this.userService.findOne(id);

    if (!user) {
      throw new UnauthorizedException('Login first to access this endpoint.');
    }

    return user;
  }
}
