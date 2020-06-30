import { PrimaryColumn, OneToMany, Entity, Column, Double } from "typeorm";
import CartItem from "./cart-item.entity";

@Entity('carts')
export default class Cart {

  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @OneToMany(type => CartItem, item => item.cart, { eager: true })
  items: CartItem[]

  @Column()
  cartItemTotal: number;
  
  @Column()
  cartItemPromoSavings: number;

  @Column()
  shippingTotal: number;

  @Column()
  cartTotal: number;

  @Column()
  isCheckout: boolean;
}
