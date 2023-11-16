import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1700159850947 implements MigrationInterface {
    name = 'InitialMigration1700159850947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "clienteId" integer`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_3d61317e18ecdf4f3dcbb851bc9" FOREIGN KEY ("clienteId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_3d61317e18ecdf4f3dcbb851bc9"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "clienteId"`);
    }

}
