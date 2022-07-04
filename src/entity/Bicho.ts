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
    raça: string

    @Column()
    porte: string

    @Column()
    endereço: string

    @Column()
    detalhes: string

    @Column()
    dataVisto: string

    @Column()
    dataCadastro: string

    @Column()
    cliente: string

    @Column()
    imagem: string

}
