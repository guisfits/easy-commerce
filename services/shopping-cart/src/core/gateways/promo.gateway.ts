import { Injectable } from '@nestjs/common';
import Promo from "../domain/carts/promo.inteface";
import Cart from "../domain/carts/cart.entity";

@Injectable()
export default class PromoGateway implements Promo {
  applyPromotions(cart: Cart): Promise<number> {
    // TODO
    return new Promise<number>((resolve, reject) => {
      resolve();
    })
  }
}
