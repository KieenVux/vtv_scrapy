import { Module } from '@nestjs/common';
import { ScrapyService } from './scrapy.service';
import { ScrapyController } from './scrapy.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Scrapy, ScrapySchema } from './schema/scrapy.schema';
import { ScrapyRepository } from './scrapy.repository';

@Module({
  imports:[MongooseModule.forFeature([{name: Scrapy.name, schema: ScrapySchema}])],
  controllers: [ScrapyController],
  providers: [ScrapyRepository, ScrapyService],
  exports: [ScrapyService]
})
export class ScrapyModule {}
