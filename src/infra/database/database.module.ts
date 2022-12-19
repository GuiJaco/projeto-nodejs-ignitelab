/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { NotificationsRepositories } from "@application/repositories/notifications-repositories";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notifications-repository";

@Module({
    providers: [PrismaService,
        {
            provide: NotificationsRepositories,
            useClass: PrismaNotificationsRepository,
        },
    ],
    exports: [
        NotificationsRepositories,
    ]
})

export class DatabaseModule {}
