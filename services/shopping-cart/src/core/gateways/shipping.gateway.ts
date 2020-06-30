import Shipping from "../domain/carts/shipping.interface";
import Cart from "../domain/carts/cart.entity";

export default class ShippingGateway implements Shipping {
  calculateShipping(cart: Cart): Promise<number> {
    // TODO
    return new Promise<number>((resolve, reject) => {
      return 0;
    })
  }
}
