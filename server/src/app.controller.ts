import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/create')
  async create(@Query() params: any): Promise<any> {
    const lead = await this.appService.create(params.type, params.name);
    return lead;
  }

  @Get('/')
  async hello() {
    // Дефолт
    return 'Hello World';
  }

}
