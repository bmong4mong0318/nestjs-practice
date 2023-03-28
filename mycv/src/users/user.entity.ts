import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { ASYNC_METHOD_SUFFIX } from '@nestjs/common/module-utils/constants';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id:', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id:', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id:', this.id);
  }
}
