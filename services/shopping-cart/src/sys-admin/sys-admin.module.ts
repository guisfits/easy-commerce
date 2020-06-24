import { Module } from '@nestjs/common';
import { ShoppingCartController } from './controllers/shopping-cart-controller';

@Module({
  controllers: [ShoppingCartController]
})
export class SysAdminModule {}
