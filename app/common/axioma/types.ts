// Common
export interface Repository<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | null>;
  create(item: Partial<T>): Promise<T | null>;
  update(item: Partial<T>): Promise<T | null>;
}
