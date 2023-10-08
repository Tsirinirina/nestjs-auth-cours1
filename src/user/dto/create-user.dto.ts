import { IsEmail, IsEnum, IsNotEmpty, IsStrongPassword } from 'class-validator';
import { Role } from '../entities/user.entity';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Le champ ne doit pas etre vide' })
  fullName: string;

  @IsNotEmpty({ message: 'Le champ ne doit pas etre vide' })
  userName: string;

  @IsNotEmpty({ message: 'Le champ ne doit pas etre vide' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Le champ mot de passe ne doit pas etre vide' })
  @IsStrongPassword({ minLength: 6, minNumbers: 1, minUppercase: 1 })
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  roleName: { type: Role; require: true };
}
