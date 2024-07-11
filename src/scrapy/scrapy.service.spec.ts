import { Test, TestingModule } from '@nestjs/testing';
import { ScrapyService } from './scrapy.service';

describe('ScrapyService', () => {
  let service: ScrapyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScrapyService],
    }).compile();

    service = module.get<ScrapyService>(ScrapyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
