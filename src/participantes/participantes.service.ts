import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Participante } from './entities/participante.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipantesService {
  private readonly logger = new Logger('ParticipanteService');
  constructor(
    @InjectRepository(Participante)
    private readonly participanteRepository: Repository<Participante>,
  ) {}

  async create(createParticipanteDto: CreateParticipanteDto) {
    try {
      const participante = this.participanteRepository.create(
        createParticipanteDto,
      );
      await this.participanteRepository.save(participante);

      return participante;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 0, offset = 0 } = paginationDto;

    return this.participanteRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(codigo: string) {
    const participante = await this.participanteRepository.findOneBy({
      codigo: +codigo,
    });

    if (!participante)
      throw new NotFoundException(`Participante with ${codigo} not found`);

    return participante;
  }

  async update(codigo: string, updateParticipanteDto: UpdateParticipanteDto) {
    const participante = await this.participanteRepository.preload({
      codigo: +codigo,
      ...updateParticipanteDto,
    });

    if (!participante)
      throw new NotFoundException(
        `Participante with codigo: ${codigo} not found`,
      );

    try {
      await this.participanteRepository.save(participante);
      return participante;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(codigo: string) {
    const participante = await this.findOne(codigo);
    await this.participanteRepository.remove(participante);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
