import { Controller, Get, Param, Query, UseFilters, Logger } from '@nestjs/common';
import { DataService } from '../services';
import { RequestContext } from '../model';

@Controller()
export class DataController {
  private logger = new Logger('DataController');
  constructor(private readonly dataService: DataService) { }

  @Get('list')
  async getList(requestContext: RequestContext) {
    this.logger.log('list of records for object');
    this.logger.log(requestContext);
    return this.dataService.getList();
  }

  @Get('read')
  async getRecord(requestContext: RequestContext) {
    this.logger.log('get the record of particular id');
    return { name: 'John Doe', address: 'USA' };
  }

}
