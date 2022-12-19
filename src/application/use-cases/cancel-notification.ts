/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { NotificationsRepositories } from "../repositories/notifications-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";

interface ICancelNotification {
    notificationId: string;
}

type ICancelNotificationResponse = void

@Injectable()
export class CancelNotification {
    constructor(
        private notificationsRepositories: NotificationsRepositories) {}


    async execute(request: ICancelNotification): Promise<ICancelNotificationResponse> {
        const {notificationId} = request

        const notification = await this.notificationsRepositories.findById(notificationId);

        if(!notification){
            throw new NotificationNotFound
        }

    notification.cancel();

    await this.notificationsRepositories.save(notification);
    }
}