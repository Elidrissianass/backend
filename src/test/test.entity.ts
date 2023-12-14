// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('test')
export class Test {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({default: "maxito"})
  name: string;

  @Column({default : "male"})
  gender: string;

  @Column({default: 20})
  age: number;
}
