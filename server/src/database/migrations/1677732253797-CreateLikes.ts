import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateLikes1677732253797 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "likes",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "user_id",
                        type: "integer",
                        isUnique: false,
                        isNullable: false,
                    },
                    {
                        name: "product_id",
                        type: "integer",
                        isUnique: false,
                        isNullable: false,
                    },
                ]
            })
        );

        await queryRunner.createForeignKey(
            'likes',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedTableName: 'users',
              referencedColumnNames: ['id']
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("likes");
    }

}
