import { Repository } from "typeorm";
import { IGenericRepository } from "../../../core";

export class TypeormGenericRepository<T> implements IGenericRepository<T> {
  private repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  getAll(): Promise<T[]> {
    return this.repository.find();
  }

  get(id: string): Promise<T> {
    return this.repository.findOneOrFail(id);
  }

  create(item: T): Promise<T> {
    const itemToCreate = this.repository.create(item);
    return this.repository.save(itemToCreate);
  }

  update(id: string, item: T): Promise<T> {
    const itemAlreadyExists = this.repository.findOneOrFail(id);
    return this.repository.save(Object.assign(itemAlreadyExists, item));
  }
}
