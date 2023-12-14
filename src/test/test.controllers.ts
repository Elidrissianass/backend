// user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  async findAll() {
    const users = await this.testService.findAll();
  console.log('Fetched users:', users);
  return users;
  }
}
