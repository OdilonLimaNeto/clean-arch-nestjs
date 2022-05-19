import { Module } from "@nestjs/common";
import { AppController, AuthorController } from "./controllers";
import { DataServicesModule } from "./services/data-services/data-services.module";
import { AuthorServicesModule } from "./services/use-cases/author/author-services.module";

@Module({
  imports: [DataServicesModule, AuthorServicesModule],
  controllers: [AppController, AuthorController],
  providers: [],
})
export class AppModule {}
