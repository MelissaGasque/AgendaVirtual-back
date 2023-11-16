import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";  //  BeforeInsert, BeforeUpdate,
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

    @OneToMany(() => Contact, (c) => c.cliente)
    contato: Contact[]

    // @BeforeInsert()
    // @BeforeUpdate()

    // hashPassword(){
    //     const hasRounds: number = getRounds(this.password)
    //     if(!hasRounds){
    //         this.password = hashSync(this.password, 10)
    //     }
    // }
}
