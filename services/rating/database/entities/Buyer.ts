import { Entity, PrimaryGeneratedColumn, Column } from "https://denolib.com/denolib/typeorm@v0.2.23-rc4/mod.ts"

@Entity("buyers")
export default class Buyer {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 256 })
  firstName!: string;
}
