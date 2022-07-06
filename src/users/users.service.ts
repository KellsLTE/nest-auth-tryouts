import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Lucas',
      username: 'lucas',
      password: 'reallysecure',
    },
    {
      id: 2,
      name: 'Melvin',
      username: 'melvin',
      password: 'reallysecure2',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
