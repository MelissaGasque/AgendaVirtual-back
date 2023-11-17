import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./index";

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({length: 40})
    full_name: string;

    @Column({length: 256})
    email: string

    @Column({length: 15})
    phone_number:string

    @Column({type: "text"})
    other_information: string

    @CreateDateColumn({type:"date"})
    created_at: string

    @ManyToOne(() => Client, (cli) => cli.contato)
    @JoinColumn()
    cliente: Client
}