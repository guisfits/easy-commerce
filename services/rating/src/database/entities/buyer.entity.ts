import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "https://denolib.com/denolib/typeorm@v0.2.23-rc4/mod.ts"
import Rating from "./rating.entity.ts";

@Entity("buyers")
export default class Buyer {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 256 })
  firstName!: string;

  @OneToMany(type => Rating, _ => _.buyer)
  ratings!: Rating[];
}
