// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('test')
export class Test {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({default : "wissal"})
  name: string;

  @Column({default : "female"})
  gender: string;
}
