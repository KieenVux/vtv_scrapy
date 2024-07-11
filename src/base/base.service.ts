import { Document } from "mongoose";
import { BaseRepository } from "./base.repository";
import { Redis } from "ioredis";

export class BaseService<Schema extends Document>{
    constructor(protected readonly baseRepository: BaseRepository<Schema>) {
        this.baseRepository = baseRepository
    }
    private client = new Redis();
    
    async getAllItem() {
        return await this.baseRepository.findAllItem();
    }

    //Lấy chi tiết tin và cache
    async getItemById(id: String, url: String) {
        let result: Promise<string> | Schema[] | String
        const keyInCache = await this.client.keys(`${url}`);
        if (url !== keyInCache[0]) {
            //nếu chưa thì sẽ vào đây
            const result = await this.baseRepository.findById(id);
            this.client.set(url + "", JSON.stringify(result))
        } else {
            //nêu có rồi sẽ vào đây
            result = await this.client.get(`${url}`)
        }
        return result
    }

    //Lấy danh sách tin theo page và cache
    async findItemWithPagination(page: number, limit: number, url: String) {
        let result: Promise<string> | Schema[] | String
        const keyInCache = await this.client.keys(`${url}`);

        //Check trong redis có url đó chưa
        if (url !== keyInCache[0]) {
            //nếu chưa thì sẽ vào đây
            result = await this.baseRepository.findItemWithPagination(page, limit);
            this.client.set(url+"", JSON.stringify(result))
        } else {
            //nêu có rồi sẽ vào đây
            result = await this.client.get(`${url}`)
        }
        return result
    }
}