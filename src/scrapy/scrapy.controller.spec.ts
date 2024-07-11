import { Test, TestingModule } from '@nestjs/testing';
import { ScrapyController } from './scrapy.controller';
import { ScrapyService } from './scrapy.service';

describe('ScrapyController', () => {
  let controller: ScrapyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScrapyController],
      providers: [ScrapyService],
    }).compile();

    controller = module.get<ScrapyController>(ScrapyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
