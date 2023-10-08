import { IsEmail, IsEnum, IsOptional, IsStrongPassword } from 'class-validator';
import { Role } from '../entities/user.entity';

export class UpdateUserDto {
  @IsOptional()
  fullName: string;

  @IsOptional()
  userName: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsStrongPassword({ minLength: 6, minNumbers: 1, minUppercase: 1 })
  password: string;

  @IsOptional()
  @IsEnum(Role)
  roleName: { type: Role; require: true };
}
