import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('ParticipanteService');
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}
  async login(loginDto: LoginDto) {
    const { usuario, contrasena } = loginDto;

    const user = await this.userRepository.findOneBy({
      usuario,
    });

    if (!user) throw new UnauthorizedException();

    if (contrasena != user.contrasena)
      throw new UnauthorizedException('Invalid Credentials');
    const payload = { sub: user.id, username: user.usuario };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { contrasena: password, ...userValues } = user;
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: userValues,
    };
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
