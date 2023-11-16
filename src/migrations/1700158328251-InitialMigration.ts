import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1700158328251 implements MigrationInterface {
    name = 'InitialMigration1700158328251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "full_name" character varying(40) NOT NULL, "username" character varying(15) NOT NULL, "email" character varying(256) NOT NULL, "password" character varying(10) NOT NULL, "phone_number" character varying(15) NOT NULL, "admin" boolean NOT NULL DEFAULT false, "created_at" date NOT NULL DEFAULT now(), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "full_name" character varying(40) NOT NULL, "email" character varying(256) NOT NULL, "phone_number" character varying(15) NOT NULL, "other_information" text NOT NULL, "created_at" date NOT NULL DEFAULT now(), "deleted_at" date, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
