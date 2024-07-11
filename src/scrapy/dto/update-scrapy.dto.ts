import { PartialType } from '@nestjs/mapped-types';
import { CreateScrapyDto } from './create-scrapy.dto';

export class UpdateScrapyDto extends PartialType(CreateScrapyDto) {}
