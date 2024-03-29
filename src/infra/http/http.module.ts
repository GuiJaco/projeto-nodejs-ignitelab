/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SendNotification } from "@application/use-cases/send-notifications";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notifcations.controller";
import { CancelNotification } from "@application/use-cases/cancel-notification";
import { CountRecipientNotification } from "@application/use-cases/count-recipient-notifications";
import { GetRecipientNotification } from "@application/use-cases/get-notification-recipient";
import { ReadNotification } from "@application/use-cases/read-notification";
import { UnreadNotification } from "@application/use-cases/unread-notification";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotification,
        GetRecipientNotification,
        ReadNotification,
        UnreadNotification,
    ],
})
export class HttpModule {}