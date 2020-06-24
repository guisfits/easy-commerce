import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('buyer/shopping-cart')
export class ShoppingCartController {

  @Post()
  create(): any {
    return;
  }

  @Get(':id/products')
  getWithProducts(): any {
    return;
  }

  @Get(":id")
  getInformation(): any {
    return;
  }

  @Put(":id/products")
  updateProducts(): any {
    return;
  }

  @Delete(":id/products/:productId")
  removeProduct(): any {
    return;
  }

  @Put(':id')
  checkOut(): any {
    return;
  }
}
