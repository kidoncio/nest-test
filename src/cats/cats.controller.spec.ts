import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { App } from '../models/app.model';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { getModelToken } from '@nestjs/sequelize';

const testCat = [
  {
    id: '9328889d-86d5-4be9-beb9-4119e196d9ba',
    firstName: 'Jack',
  },
];

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;
  let model: typeof App;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [
        CatsService,
        {
          provide: getModelToken(App),
          useValue: {
            findAll: jest.fn(() => testCat),
            create: jest.fn(() => testCat),
          },
        },
      ],
    }).compile();

    catsService = app.get<CatsService>(CatsService);
    catsController = app.get<CatsController>(CatsController);
    model = app.get<typeof App>(getModelToken(App));
  });

  describe('root', () => {
    it('should return cats list', async () => {
      expect(await catsController.findAll()).toEqual(testCat);
    });

    it('should add a cat', async () => {
      expect(
        await catsController.newCat({
          firstName: 'Jack',
        }),
      ).toEqual(testCat);
    });
  });
});
