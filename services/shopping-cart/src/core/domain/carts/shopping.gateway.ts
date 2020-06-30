import Cart from "./cart.entity";

export default interface ShippingGateway {
  calculateShipping(cart: Cart): Promise<number>;
}
