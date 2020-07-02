import { PrimaryColumn, OneToMany, Entity, Column } from "typeorm";
import CartItem from "./cart-item.entity";
import { v4 as uuid } from 'uuid';
import Shipping from "./shipping.interface";
import ShoppingCartCheckedOut from "src/core/events/shopping-cart-checked-out.event";
import { AggregateRoot, IEvent } from "@nestjs/cqrs";

@Entity('carts')
export default class Cart extends AggregateRoot {

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

  static create(userId: string): Cart {
    const cart = new Cart();

    cart.id = uuid();
    cart.userId = userId;
    cart.items = [];
    cart.cartItemTotal = 0;
    cart.cartItemPromoSavings = 0;
    cart.shippingTotal = 0;
    cart.cartTotal = 0;
    cart.isCheckout = false;

    return cart;
  }

  async calculateCart(shipping: Shipping): Promise<void> {
    if (!this.items) return;

    this.cartItemTotal = 0;
    this.items.forEach(item => {
      this.cartItemPromoSavings += item.promoSavings * item.quantity;
      this.cartItemTotal += item.product.price * item.quantity;
    });

    this.shippingTotal = await shipping.calculateShipping(this);
    this.cartTotal = this.cartItemTotal + this.shippingTotal;
  }

  checkout(): void {
    this.isCheckout = true;
    this.apply(new ShoppingCartCheckedOut(this.id));
  }
}
