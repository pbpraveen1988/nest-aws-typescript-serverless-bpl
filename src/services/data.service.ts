import { Injectable } from '@nestjs/common';
import { QueryParams } from '../model';
import { Utils } from '../utils';

@Injectable()
export class DataService {
    // /object: string, query: QueryParams
    async getList(): Promise<any> {
        return Utils.newResolvedPromise([
            {name:'John Doe', address: 'USA'},
            {name:'John Doe', address: 'USA'},
            {name:'John Doe', address: 'USA'},
            {name:'John Doe', address: 'USA'},
        ])
    }

    async getRecordByIdOrKey(object: string, idOrKey: string, query: QueryParams): Promise<any> {
       return Utils.newResolvedPromise({name:'John Doe', address: 'USA'});
    }
}
