import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';

@Module({
  imports: [],
  controllers: [AppController, ShoppingCartController],
  providers: [AppService],
})
export class AppModule {}
