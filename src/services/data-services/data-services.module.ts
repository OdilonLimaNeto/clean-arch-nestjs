import { Module } from "@nestjs/common";
import { TypeormDataServicesModule } from "../../frameworks/data-services/typeorm/typeorm-data-services.module";

@Module({
  imports: [TypeormDataServicesModule],
  exports: [TypeormDataServicesModule],
})
export class DataServicesModule {}
