// user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
   findAll() {
    console.log("tessssssssssssssssssst",this.testService.findAll());
   return this.testService.findAll();
 
  }
}
