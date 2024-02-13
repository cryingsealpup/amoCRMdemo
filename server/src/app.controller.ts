import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/lead')
  async createLead() {
    // Создаем сделку
    const lead = await this.appService.createLead();
    return lead;
  }

  @Get('/')
  async hello() {
    // Дефолт
    return 'Hello World';
  }

}
