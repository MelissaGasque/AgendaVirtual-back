import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./index";
import { getRounds, hashSync } from "bcryptjs";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({length: 40})
    full_name: string;

    @Column({length: 15, unique:true})
    username: string;

    @Column({length: 256, unique:true})
    email: string

    @Column({length: 70})
    password: string

    @Column({length: 15})
    phone_number:string

    @Column({default:false})
    admin: boolean;

    @CreateDateColumn({type:"date"})
    created_at: string

    @OneToMany(() => Contact, (c) => c.client)
    contat: Contact[]

    @BeforeInsert()
    @BeforeUpdate()

    hashPassword(){
        const hasRounds: number = getRounds(this.password)
        if(!hasRounds){
            this.password = hashSync(this.password, 10)
        }
    }
};
