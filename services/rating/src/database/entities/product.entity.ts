import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "../../deps.ts";
import Rating from "./rating.entity.ts";

@Entity("products")
export default class Product {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 256 })
  name!: string;

  @OneToMany(type => Rating, x => x.product)
  ratings!: Rating[];
}
