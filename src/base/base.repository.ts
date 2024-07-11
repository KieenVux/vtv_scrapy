import { Inject } from '@nestjs/common';
import { Schema } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
export class BaseRepository<Schema extends Document> {
    constructor(@Inject(Schema.name) protected readonly model: Model<Schema>) {
        this.model = model;
     }
    
    async findAllItem() :Promise<Schema[]> {
        const item = await this.model.find();
        return item;
    }

    async findItemWithPagination(page: number, limit: number): Promise<Schema[]> {
        const skip = (page - 1) * limit;
        const item = await this.model.find().skip(skip).limit(limit);
        return item;
    }

    async findById(id: String) : Promise<Schema>{
        const item = await this.model.findById(id);
        return item;
    }
}