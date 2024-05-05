import { Controller, Get } from '@nestjs/common';

@Controller()
export class ActionController {
  @Get('/')
  index() {
    return 'Home';
  }
}
