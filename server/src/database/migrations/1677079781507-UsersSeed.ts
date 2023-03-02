import { MigrationInterface, QueryRunner } from "typeorm"

export class UsersSeed1677079781507 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO "users" ("email", "password") VALUES ('user1@gmail.com', 'password');
        INSERT INTO "users" ("email", "password") VALUES ('user2@gmail.com', 'password');
        INSERT INTO "users" ("email", "password") VALUES ('user3@gmail.com', 'password');
        INSERT INTO "users" ("email", "password") VALUES ('user4@gmail.com', 'password');
        INSERT INTO "users" ("email", "password") VALUES ('user5@gmail.com', 'password');

        INSERT INTO "users" ("email", "password") VALUES ('user1@hotmail.com', 'password');
        INSERT INTO "users" ("email", "password") VALUES ('user2@hotmail.com', 'password');
        INSERT INTO "users" ("email", "password") VALUES ('user3@hotmail.com', 'password');
        INSERT INTO "users" ("email", "password") VALUES ('user4@hotmail.com', 'password');
        INSERT INTO "users" ("email", "password") VALUES ('user5@hotmail.com', 'password');
    `
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DELETE FROM "users";
    `
    )
    }

}
