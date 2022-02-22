import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AppDTO } from '../models/app.dto';
import { App } from '../models/app.model';

@Injectable()
export class CatsService {
  constructor(@InjectModel(App) private appModel: typeof App) {}

  async getCats(): Promise<App[]> {
    return this.appModel.findAll();
  }

  async addApp(app: AppDTO): Promise<App> {
    return this.appModel.create(app);
  }
}
