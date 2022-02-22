import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppDTO } from '../models/app.dto';
import { App } from '../models/app.model';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): Promise<App[]> {
    return this.catsService.getCats();
  }

  @Post('new')
  async newCat(@Body() app: AppDTO): Promise<App> {
    return this.catsService.addApp(app);
  }
}
