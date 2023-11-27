import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1700773530205 implements MigrationInterface {
    name = 'InitialMigration1700773530205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying(40) NOT NULL, "email" character varying(256) NOT NULL, "phone_number" character varying(15) NOT NULL, "other_information" text NOT NULL, "created_at" date NOT NULL DEFAULT now(), "clientId" uuid, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying(40) NOT NULL, "username" character varying(15) NOT NULL, "email" character varying(256) NOT NULL, "password" character varying(70) NOT NULL, "phone_number" character varying(15) NOT NULL, "admin" boolean NOT NULL DEFAULT false, "created_at" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_a95860aa92d1420e005893043de" UNIQUE ("username"), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_8039454fab552403d5579cf7423"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
