import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_participante')
export class Participante {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  codigo: number;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  simposio: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  taller: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  nombre: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  pais: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  organismo: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  institucion: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  provincia: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  clasificacion: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  acreditado: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  acceso_apertura: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  acceso_clausura: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  acceso_clubhabana: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  acceso_actividad_clausura: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  acceso_ballet: string;
  @ApiProperty()
  @Column('text', { nullable: true, default: null })
  ponente: string;
}
