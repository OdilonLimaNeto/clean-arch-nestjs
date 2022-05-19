import { Author } from "../entities";

export class CreateAuthorResponseDTO {
  success: boolean;
  createdAuthor: Author;
}
