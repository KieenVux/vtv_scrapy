import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ScrapyService } from './scrapy.service';
import { CreateScrapyDto } from './dto/create-scrapy.dto';
import { UpdateScrapyDto } from './dto/update-scrapy.dto';

@Controller('scrapy')
export class ScrapyController {
  constructor(private readonly scrapyService: ScrapyService) {}
  @Get()
  async findAll() {
    const result = await this.scrapyService.getAllItem();
    console.log(result);
    return result
  }

  @Get(':id')
  async getNewById(@Param('id') id: String) {
    // const result = await this.scrapyService.getItemById(id);
    // return result
  }

  @Get('originalid/query')
  async getNewsByOriginalId(@Query() query: UpdateScrapyDto) {
    console.log(query);
    
    const result = await this.scrapyService.findByOriginalId(query);
    return result;
  }
}
