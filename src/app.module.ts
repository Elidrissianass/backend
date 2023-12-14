import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';
import { Test } from './test/test.entity';

@Module({
  imports: [TestModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      // url: 'postgresql://postgres:DAdg32eAcCgF*bc34Cg1d535C1aEeaAF@monorail.proxy.rlwy.net:19609/railway',
      host: 'monorail.proxy.rlwy.net',
      port: 19609,
      username: 'postgres',
      password: 'DAdg32eAcCgF*bc34Cg1d535C1aEeaAF',
      database: 'railway',
      synchronize: true,
      logging: true,
      entities: [Test],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
