import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import CartItem from "../carts/cart-item.entity";

@Entity('products-catalog')
export default class ProductCatalog {

  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  productId: string;

  @Column('varchar', { length: 256 })
  name: string;

  @Column('varchar', { length: 1024 })
  description: string

  @Column()
  price: number;

  @Column()
  imagePath: string;

  @Column()
  inventoryId: string;

  @OneToMany(type => CartItem, cartItem => cartItem.product)
  cartItems: CartItem[]
}
