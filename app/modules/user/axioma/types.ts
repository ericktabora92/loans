import { Repository } from '../../../common/axioma/types';

// Domain
export interface User {
  firstName: string;
  lastName: string;
}

export interface UserRepository extends Repository<User> {
  getNewUser(): Promise<User>;
}
