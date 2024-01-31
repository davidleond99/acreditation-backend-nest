import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { EnvValidationSchema, EnvConf } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantesModule } from './participantes/participantes.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConf],
      validationSchema: EnvValidationSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
    }),
    UsersModule,
    ParticipantesModule,
    CommonModule,
    AuthModule,
  ],
})
export class AppModule {}
