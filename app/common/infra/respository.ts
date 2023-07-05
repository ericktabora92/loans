import axios from 'axios';
import { Repository } from '../axioma/types';

export class RepositoryImplementation<T> implements Repository<T> {
  readonly http = axios;

  constructor(private url: string) {}

  async getAll(): Promise<T[]> {
    const r = await this.http.get<T[]>(this.url);
    return r.data;
  }

  async getById(id: number): Promise<T | null> {
    const r = await this.http.get<T>(`${this.url}${id}`);
    return r.data;
  }

  async create(item: Partial<T>): Promise<T | null> {
    const r = await this.http.post<T>(`${this.url}`, item);
    return r.data;
  }

  async update(item: Partial<T>): Promise<T | null> {
    const r = await this.http.put<T>(`${this.url}`, item);
    return r.data;
  }
}
