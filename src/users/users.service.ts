import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  //БД Временно отключена
  //constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    //const user = await this.userRepository.create(dto);
    //return user;
  }

  async getAllUsers() {
    //const users = await this.userRepository.findAll();
    //return users;
    return [{id:1, name: 'Test'}]
  }

  //Test
  async getid(dto: CreateUserDto) {
    return dto.id
  }
}
