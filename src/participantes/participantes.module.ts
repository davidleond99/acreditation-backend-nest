import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParticipantesService } from './participantes.service';
import { ParticipantesController } from './participantes.controller';
import { Participante } from './entities/participante.entity';

@Module({
  controllers: [ParticipantesController],
  providers: [ParticipantesService],
  imports: [TypeOrmModule.forFeature([Participante])],
})
export class ParticipantesModule {}
