import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { App } from '../models/app.model';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRoot({
          dialect: 'mysql',
          host: 'localhost',
          port: 3307,
          username: 'root',
          password: '123321',
          database: 'gladfy',
          models: [App],
        }),
      ],
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsService = app.get<CatsService>(CatsService);
    catsController = app.get<CatsController>(CatsController);
  });

  describe('root', () => {
    it('should return cats list', () => {
      const result = Promise.all([
        {
          id: '9328889d-86d5-4be9-beb9-4119e196d9ba',
          firstName: 'Jack',
        },
      ] as App[]);

      jest.spyOn(catsService, 'getCats').mockImplementation(() => result);

      expect(catsController.findAll()).toStrictEqual([
        'Seu Antônio',
        'Dona Filomena',
        'Jusé Cláudio',
        'Juaquim',
      ]);
    });
  });
});
