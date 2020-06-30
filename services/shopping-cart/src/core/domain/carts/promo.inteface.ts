import Cart from "./cart.entity";

export default interface Promo {
  applyPromotions(cart: Cart): Promise<number>;
}
