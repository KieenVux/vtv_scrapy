import { BaseRepository } from "src/base/base.repository";
import { Scrapy } from "./schema/scrapy.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UpdateScrapyDto } from "./dto/update-scrapy.dto";

export class ScrapyRepository extends BaseRepository<Scrapy>{
    constructor(@InjectModel(Scrapy.name) scrapyModel: Model<Scrapy>) {
        super(scrapyModel)
    }

    async findByOriginalId(updateScrapyDto: UpdateScrapyDto) {
        const item = await this.model.findOne(updateScrapyDto)
        return item;
    }
}