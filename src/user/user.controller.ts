import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(@Query('name') name: string, @Query('password') password: string) {
    return this.userService.findByNamePassword(name, password);
  }

  @Delete(':id')
  deleteUser(@Param('userId') userId: number) {
    this.userService.removeUser(userId);
  }

  @Post()
  createUser(@Body() user: User) {
    return this.userService.createUser(user);
  }
}
