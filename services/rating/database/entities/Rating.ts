import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "https://denolib.com/denolib/typeorm@v0.2.23-rc4/mod.ts"
import Product from "./Product.ts";

@Entity("ratings")
export default class Rating {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "int" })
  rate!: number;

  @Column({ type: "text" })
  comment!: string;

  @ManyToOne(type => Product, p => p?.ratings)
  product: Product | null = null;
}
