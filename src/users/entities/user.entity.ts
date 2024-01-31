import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_acceso')
export class User {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty({
    type: 'number',
    example: 'number',
  })
  id: number;
  @Column('text', { nullable: false })
  @ApiProperty()
  nombre_apellidos: string;
  @Column('text', { nullable: false })
  @ApiProperty()
  usuario: string;
  @Column('text', { nullable: false })
  contrasena: string;
}
