import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { NewsService } from './news.service';
import { QueryPaginationDto } from 'src/base/dto/queryPagination';
import { Request } from 'express';
import { Throttle } from '@nestjs/throttler';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) { }

  @Get()
  findAll() {
    return this.newsService.getAllItem();
  }

  @Get('/pagination')
  //Nếu chưa có set Throtlle thì nó sẽ dựa trên ttl ở bên default để check
  @Throttle({ "medium": { limit: 6, ttl: 60000 } })
  findItemWithPagination(@Query() query: QueryPaginationDto, @Req() req: Request) {
    console.log(req.url );
    const { page, limit, url = req.url } = query
    const news = this.newsService.findItemWithPagination(page, limit, url);
    return news;
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.newsService.getItemById(id, req.url);
  }
}
