import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeormconfig';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      typeOrmConfig
    ),
    UsersModule,
    // SignupModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
