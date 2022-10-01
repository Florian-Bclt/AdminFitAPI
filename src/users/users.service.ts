import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly UsersRepository : Repository<UsersEntity>,
    ){}

        async findAll() :Promise<UsersEntity[]> {

            const Users = await this.UsersRepository.find();
            Users.forEach(user => {
                 user["password"] = "*"
            });
            return Users;
        }
        async create(userDto : UserDto) {
          const datetime = Date();
          const login = userDto.login;
          const password = userDto.password;
          const userEntity = {
              login,
              password,
              
          };

          const user = this.UsersRepository.create(userEntity);
          await this.UsersRepository.save(user);
          return user
    } 
}
