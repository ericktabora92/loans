import { RepositoryImplementation } from '../../../common/infra/respository';
import { User, UserRepository } from '../axioma/types';

export class HttpService
  extends RepositoryImplementation<User>
  implements UserRepository
{
  constructor() {
    super('users/');
  }

  async getNewUser(): Promise<User> {
    const response = await this.http.get<User>('');
    return response.data;
  }
}
