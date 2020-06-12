import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "https://denolib.com/denolib/typeorm@v0.2.23-rc4/mod.ts"
import Rating from "./Rating.ts";

@Entity("products")
export default class Product {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 256 })
  name!: string;

  @OneToMany(type => Rating, x => x?.product)
  ratings!: Rating[];
}
