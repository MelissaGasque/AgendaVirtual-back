import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @DeleteDateColumn({ type: "date"})
    deleted_at: string | null;
}