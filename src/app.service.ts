import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return ['Hello Wissal nyan <3 !!'];
  }
}
