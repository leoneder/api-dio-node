import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn()
    id: string 

    @Column()
    nome: string

    @Column()
    email: string
}
