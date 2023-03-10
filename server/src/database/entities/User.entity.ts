import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ type: String })
    email: string;

    @Column({ type: String })
    password: string;
}
