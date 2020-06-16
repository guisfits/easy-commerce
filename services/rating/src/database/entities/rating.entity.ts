import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "../../deps.ts";
import Product from "./product.entity.ts";
import Buyer from "./buyer.entity.ts";

@Entity("ratings")
export default class Rating {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "int" })
  rate!: number;

  @Column({ type: "text" })
  comment!: string;

  @ManyToOne(type => Product, _ => _.ratings)
  product!: Product;

  @ManyToOne(type => Buyer, _ => _.ratings)
  buyer!: Buyer;
}
