import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./index";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({length: 40})
    full_name: string;

    @Column({length: 15})
    username: string;

    @Column({length: 256})
    email: string

    @Column({length: 10})
    password: string

    @Column({length: 15})
    phone_number:string

    @Column({default:false})
    admin: boolean;

    @CreateDateColumn({type:"date"})
    created_at: string

    // @DeleteDateColumn({ type: "date"})
    // deleted_at: string | null;

    @OneToMany(() => Contact, (c) => c.cliente)
    contato = Contact


    // hashPassword(){
    //     const hasRounds: number = getRounds(this.password)
    //     if(!hasRounds){
    //         this.password = hashSync(this.password, 10)
    //     }
    // }
}
