import { Injectable } from '@nestjs/common';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

@Injectable()
export class RolesService {}
