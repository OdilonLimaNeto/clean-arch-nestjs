import { Column, Entity } from "typeorm";

@Entity()
export class Author {
  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
