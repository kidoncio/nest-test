import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { App } from 'src/models/app.model';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [SequelizeModule.forFeature([App])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
