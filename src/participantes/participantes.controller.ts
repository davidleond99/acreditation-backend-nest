import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  UseGuards,
  Put,
} from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Participante } from './entities/participante.entity';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@ApiTags('Participantes')
@UseGuards(AuthGuard)
@Controller('participants')
export class ParticipantesController {
  constructor(private readonly participanteService: ParticipantesService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Participante creado',
    type: Participante,
  })
  create(@Body() createParticipanteDto: CreateParticipanteDto) {
    return this.participanteService.create(createParticipanteDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Listado Participantes',
    type: [Participante],
  })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.participanteService.findAll(paginationDto);
  }

  @Get(':codigo')
  @ApiResponse({
    status: 200,
    description: 'Obtener Un Participantes',
    type: Participante,
  })
  findOne(@Param('codigo') codigo: string) {
    return this.participanteService.findOne(codigo);
  }

  @Put(':codigo')
  @ApiResponse({
    status: 200,
    description: 'Modificar Participante',
    type: Participante,
  })
  update(
    @Param('codigo') codigo: string,
    @Body() updateParticipanteDto: UpdateParticipanteDto,
  ) {
    return this.participanteService.update(codigo, updateParticipanteDto);
  }

  @Delete(':codigo')
  @ApiResponse({
    status: 200,
    description: 'Eliminar Participante',
    type: Participante,
  })
  remove(@Param('codigo') codigo: string) {
    return this.participanteService.remove(codigo);
  }
}
