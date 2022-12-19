/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { NotificationsRepositories } from "../repositories/notifications-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";

interface IUnreadNotification {
    notificationId: string;
}

type IUnreadNotificationResponse = void

@Injectable()
export class UnreadNotification {
    constructor(
        private notificationsRepositories: NotificationsRepositories) {}


    async execute(request: IUnreadNotification): Promise<IUnreadNotificationResponse> {
        const {notificationId} = request

        const notification = await this.notificationsRepositories.findById(notificationId);

        if(!notification){
            throw new NotificationNotFound
        }

    notification.unRead();

    await this.notificationsRepositories.save(notification);
    }
}