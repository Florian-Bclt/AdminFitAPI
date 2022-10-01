import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersEntity } from 'src/entities/users.entity';
import { UserDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
    @Get()
    findAll(): Promise<UsersEntity[]>
    {
      const users = this.userService.findAll();
      return users;
    }
    @Post()
    create(@Body() userDto : UserDto)
    {
      console.log(userDto)
      return this.userService.create(userDto);
    }
}
