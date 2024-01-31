import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateParticipanteDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'simposio',
  })
  simposio: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'taller',
  })
  taller: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'nombre',
  })
  nombre: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, nullable: true, name: 'pais' })
  pais: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'organismo',
  })
  organismo: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'institucion',
  })
  institucion: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'provincia',
  })
  provincia: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'clasificacion',
  })
  clasificacion: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'acreditado',
  })
  acreditado: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'acceso_apertura',
  })
  acceso_apertura: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'acceso_clausura',
  })
  acceso_clausura: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'acceso_clubhabana',
  })
  acceso_clubhabana: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'acceso_actividad_clausura',
  })
  acceso_actividad_clausura: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'acceso_ballet',
  })
  acceso_ballet: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    nullable: true,
    name: 'ponente',
  })
  ponente: string;
}
