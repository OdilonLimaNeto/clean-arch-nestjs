import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { IDataServices } from "../../../core";
import { TypeormGenericRepository } from "./typeorm-generic-repository";
import { Author } from "./model";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TypeormDataServices
  implements IDataServices, OnApplicationBootstrap
{
  authors: TypeormGenericRepository<Author>;

  constructor(
    @InjectRepository(Author)
    private AuthorRepository: Repository<Author>
  ) {}

  onApplicationBootstrap() {
    this.authors = new TypeormGenericRepository<Author>(this.AuthorRepository);
  }
}
