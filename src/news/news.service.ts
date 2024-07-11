import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { News } from './schema/news.shcema';
import { NewsRepository } from './news.repository';

@Injectable()
export class NewsService extends BaseService<News> {
  constructor(private readonly newsRepository: NewsRepository) {
    super(newsRepository);
  }
}
