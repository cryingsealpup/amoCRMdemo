import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async createLead() {
    // Создаем сделку для контакта
    const lead = await this.appService.createLead();

    return lead;
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
