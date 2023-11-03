import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  private constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
  ) {}

  async createOrder(): Promise<Order> {
    const order = this.ordersRepository.create({});
    await this.ordersRepository.save(order);
    return order;
  }
}
