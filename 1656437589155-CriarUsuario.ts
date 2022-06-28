import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriarUsuario1656437589155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table ({
                    name: 'usuarios',
                    columns: [
                        {
                            name:'id',
                            type:'string',
                            isPrimary: true,
                            isNullable: false
                        },

                        {
                            name:'nome',
                            type:'string',
                            isNullable: false
                        }
                    ]
                })
            );    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
