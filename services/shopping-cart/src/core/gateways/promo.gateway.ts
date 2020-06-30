import Promo from "../domain/carts/promo.inteface";
import Cart from "../domain/carts/cart.entity";

export default class PromoGateway implements Promo {
  applyPromotions(cart: Cart): Promise<number> {
    // TODO
    return new Promise<number>((resolve, reject) => {
      resolve();
    })
  }
}
