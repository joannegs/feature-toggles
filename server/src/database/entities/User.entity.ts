import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({ type: String })
    email: string;

    @Column({ type: String })
    password: string;
}
