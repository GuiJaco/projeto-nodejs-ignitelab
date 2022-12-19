/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { NotificationsRepositories } from "../repositories/notifications-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";

interface IReadNotification {
    notificationId: string;
}

type IReadNotificationResponse = void

@Injectable()
export class ReadNotification {
    constructor(
        private notificationsRepositories: NotificationsRepositories) {}


    async execute(request: IReadNotification): Promise<IReadNotificationResponse> {
        const {notificationId} = request

        const notification = await this.notificationsRepositories.findById(notificationId);

        if(!notification){
            throw new NotificationNotFound
        }

    notification.read();

    await this.notificationsRepositories.save(notification);
    }
}