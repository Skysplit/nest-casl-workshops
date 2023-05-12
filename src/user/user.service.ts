import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOrCreate(user: UserDTO) {
    await this.userRepository.upsert(user, {
      conflictPaths: ['externalId'],
    });

    return await this.userRepository.find({
      where: {
        externalId: user.externalId,
      },
    });
  }
}
