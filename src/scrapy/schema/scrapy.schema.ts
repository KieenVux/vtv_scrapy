import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ScrapyDocument =  Scrapy & Document;

@Schema({ collection: 'thegioi_news' })
export class Scrapy extends Document {
    @Prop()
    original_id: string;
    
    @Prop()
    original_url: string;

    @Prop()
    title: string;
    
    @Prop()
    author: string;
    
    @Prop()
    avatar: string;
    
    @Prop()
    avatar_desc: string;
    
    @Prop()
    sapo: string;
    
    @Prop()
    content: string;
    
    @Prop()
    scraped_time: Date;
}

export const ScrapySchema = SchemaFactory.createForClass(Scrapy);