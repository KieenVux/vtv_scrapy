import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { Scrapy } from './schema/scrapy.schema';
import { ScrapyRepository } from './scrapy.repository';
import { UpdateScrapyDto } from './dto/update-scrapy.dto';

@Injectable()
export class ScrapyService extends BaseService<Scrapy> {
  constructor(private readonly scrapyRepository: ScrapyRepository) {
    super(scrapyRepository);
  }

  async findByOriginalId(updateScrapyDto: UpdateScrapyDto) {
    const item = this.scrapyRepository.findByOriginalId(updateScrapyDto);
    return item;
  }
}
