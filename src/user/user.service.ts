import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async findAll(): Promise<Array<User>> {
    return await this.userRepository.find();
  }

  async createUser(user: User): Promise<User> {
    console.log('add', user);
    return this.userRepository.save(user);
  }

  async removeUser(userId: number): Promise<void> {
    const user = await this.findOne(userId);
    if (user !== null) await this.userRepository.remove(user);
  }

  async update(user: User): Promise<void> {
    await this.userRepository.update(user.id, user);
  }

  async findOne(userId: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id: userId });
  }

  async findByNamePassword(name: string, password: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ name, password });
  }
}
