import { Module } from '@nestjs/common';
import { ShopModule } from './shop/shop.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'shop',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      // subscribers: [],
      // migrations: [],
    }),
    ShopModule,
  ],
})
export class AppModule {}
