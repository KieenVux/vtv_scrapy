import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base/base.repository';
import { News, NewsDocument } from './schema/news.shcema';

@Injectable()
export class NewsRepository extends BaseRepository<NewsDocument> {
constructor(
   @InjectModel(News.name) Model: Model<NewsDocument>,
) {
   super(Model);
}
}