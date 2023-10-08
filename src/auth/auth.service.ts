import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string): Promise<User | null> {
    const user = await this.userService.findByUserName(userName);

    if (!user) {
      return null;
    } else {
      const isSame = await bcrypt.compare(password, user.password);
      console.log(isSame);

      if (!isSame) {
        return null;
      }
      return user;
    }
  }

  async login(user: User): Promise<any> {
    return {
      token: this.jwtService.sign({
        id: user._id,
      }),
      userName: user.userName,
    };
  }
}
