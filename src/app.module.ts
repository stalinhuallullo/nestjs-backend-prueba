
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    /*TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "127.0.0.1",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "inmobiliariahuertas",
      "entities": [User],
      "synchronize": true
  }), */
    /*TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "184.171.242.25",
      "port": 3306,
      "username": "reclamosdigitale_nestjs_prueba",
      "password": "nestjs_prueba",
      "database": "reclamosdigitale_nestjs_prueba",
      "entities": [User],
      "synchronize": true
  }),*/
    /*TypeOrmModule.forRootAsync({
        useFactory: () => ({
          type: 'mysql',
          host: "localhost",
          port: 3306,
          username: "reclamosdigitale_nestjs_prueba",
          password: "nestjs_prueba",
          database: "reclamosdigitale_nestjs_prueba",
        })
      }),*/
    /*DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        user: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
      }),
    }),*/
    //UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
