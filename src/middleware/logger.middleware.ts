import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { Utils } from 'src/utils';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction<any, any, any> | Promise<MiddlewareFunction<any, any, any>> {
    throw new Error('Method not implemented.');
  }

}
