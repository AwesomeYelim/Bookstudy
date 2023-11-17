import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1700189498781 implements MigrationInterface {
  name = 'Migrations1700189498781';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`mentions\` RENAME COLUMN \`category\` TO \`type\``,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`mentions\` RENAME COLUMN \`type\` TO \`category\``,
    );
  }
}
