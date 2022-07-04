import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    animal: string

    @Column()
    cor: string

    @Column()
    raça: number

    @Column()
    porte: number

}
