import { Controller, Get } from '@nestjs/common';
import { App } from 'src/models/app.model';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): Promise<App[]> {
    return this.catsService.getCats();
  }
}
