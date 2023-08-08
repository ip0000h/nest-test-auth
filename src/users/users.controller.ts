import { Controller, Get } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return 'users';
  }

  @Get(':id')
  getUser(id: number) {
    return `user ${id}`;
  }
}
