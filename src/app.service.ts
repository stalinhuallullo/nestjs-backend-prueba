import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Object {
    return {
      "name": "Taylor Swift",
      "age": "33"
    };
  }
}
