import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "../../deps.ts";
import Rating from "./rating.entity.ts";

@Entity("buyers")
export default class Buyer {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 256 })
  fullName!: string;

  @OneToMany(type => Rating, _ => _.buyer)
  ratings!: Rating[];
}
