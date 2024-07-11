import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NewsRepository } from './news.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { News, NewsSchema } from './schema/news.shcema';

@Module({
  imports: [MongooseModule.forFeature([{name: News.name, schema: NewsSchema}])],
  controllers: [NewsController],
  providers: [NewsService, NewsRepository],
})
export class NewsModule {}
