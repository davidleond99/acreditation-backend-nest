import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class LoginDto {
  @IsString()
  @ApiProperty({
    required: true,
    name: 'usuario',
  })
  usuario: string;
  @IsString()
  @ApiProperty({
    required: true,
    name: 'contrasena',
  })
  contrasena: string;
}

export class LoginResponse {
  @ApiProperty()
  access_token: string;
  @ApiProperty()
  user: User;
}
