import { Controller, Get, Render } from '@nestjs/common';

@Controller('')
export class ShopController {
  @Get('/')
  @Render('index')
  async getRoot() {
    return {};
  }
}
