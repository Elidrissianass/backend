import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return ['Hello DEV WORLD UPDATED LAST OPERATION <3 !!'];
  }
}
