// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private userRepository: Repository<Test>,
  ) {}

  async findAll(): Promise<Test[]> {
    const users = await this.userRepository.find();
  console.log('Fetched users from repository:', users);
  return users;
  }

}
