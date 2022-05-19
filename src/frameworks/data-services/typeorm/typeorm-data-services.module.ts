import { Module } from "@nestjs/common";
import { IDataServices } from "../../../core";
import { Author } from "./model";
import { TypeormDataServices } from "./typeorm-data-services.service";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forFeature([Author]),
    TypeOrmModule.forRootAsync({
      useFactory: async (
        configService: ConfigService
      ): Promise<TypeOrmModuleOptions> => ({
        type: "postgres",
        host: configService.get("POSTGRES_HOST"),
        port: +configService.get("POSTGRES_PORT"),
        username: configService.get("POSTGRES_USER"),
        password: configService.get("POSTGRES_PASSWORD"),
        database:
          process.env.NODE_ENV !== "test"
            ? configService.get("POSTGRES_DB")
            : "test",
        autoLoadEntities: true,
        logging: process.env.NODE_ENV !== "test",
        synchronize: true,
        keepConnectionAlive: false,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: TypeormDataServices,
    },
  ],
  exports: [IDataServices],
})
export class TypeormDataServicesModule {}
