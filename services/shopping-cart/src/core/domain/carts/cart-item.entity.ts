import ProductCatalog from './../catalogs/product-catalog.entity';
import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import Cart from './cart.entity';

@Entity('cart-items')
export default class CartItem {

  @PrimaryColumn('uuid')
  id: string;

  @ManyToOne(type => ProductCatalog, product => product.cartItems)
  product: ProductCatalog;

  @Column()
  quantity: number;

  @ManyToOne(type => Cart, cart => cart.items)
  cart: Cart;

  @Column()
  promoSavings: number;
}
