import { Controller, Patch Get, Post, Put, Delete } from '@nestjs/common';

@Controller('shopping-cart')
export class ShoppingCartController {

  constructor(

  ) { }

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

  @Get()
  getAll(): any {
    return;
  }

  @Patch(":id")
  toggleStatus(): any {
    return;
  }
}
