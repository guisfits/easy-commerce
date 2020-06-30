import ProductCatalog from './../catalogs/product-catalog.entity';
import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import Cart from './cart.entity';
import { v4 as uuid } from 'uuid';

@Entity('cart-items')
export default class CartItem {

  @PrimaryColumn('uuid')
  id: string;

  @ManyToOne(type => ProductCatalog, product => product.cartItems, { eager: true })
  product: ProductCatalog;

  @Column()
  quantity: number;

  @ManyToOne(type => Cart, cart => cart.items)
  cart: Cart;

  @Column()
  promoSavings: number;

  static create(product: ProductCatalog, quantity: number, cart: Cart, promoSavings: number): CartItem {
    const item = new CartItem();
    item.id = uuid();
    item.product = product;
    item.quantity = quantity;
    item.cart = cart;
    item.promoSavings = promoSavings;

    return item;
  }

  accumulateQuantity(quantity: number): void {
    this.quantity += quantity;
  }
}
