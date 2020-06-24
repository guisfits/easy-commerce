import { Controller, Get, Patch } from "@nestjs/common";

@Controller('sys-admin/shopping-cart')
export class ShoppingCartController {

  @Get()
  getAll(): any {
    return;
  }

  @Patch(":id")
  toggleStatus(): any {
    return;
  }
}
