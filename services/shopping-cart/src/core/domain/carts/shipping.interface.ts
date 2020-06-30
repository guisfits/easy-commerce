import Cart from "./cart.entity";

export default interface Shipping {
  calculateShipping(cart: Cart): Promise<number>;
}
