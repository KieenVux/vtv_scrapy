import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type NewsDocument = News & Document;

@Schema({ collection: 'thegioi_news' })
export class News extends Document {
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

export const NewsSchema = SchemaFactory.createForClass(News);