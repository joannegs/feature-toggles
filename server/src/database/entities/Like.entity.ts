import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("likes")
export class Like {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ type: String })
    user_id: number;

    @Column({ type: String })
    product_id: number;
}
