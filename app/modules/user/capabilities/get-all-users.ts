import { UserRepository } from '../axioma/types';

export class GetAllUsers {
  constructor(readonly httpService: UserRepository) {}

  async execute() {
    const users = await this.httpService.getAll();

    return users;
  }
}
