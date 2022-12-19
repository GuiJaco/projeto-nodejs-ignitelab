/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationsRepositories } from "../repositories/notifications-repositories";

interface ISendNotification {
    recipientId: string;
    content: string;
    category: string;
}

interface ISendNotificationResponse {
    notification: Notification;
}

@Injectable()
export class SendNotification {
    constructor(
        private notificationsRepositories: NotificationsRepositories) {}


    async execute(request: ISendNotification): Promise<ISendNotificationResponse> {
        const {category, content, recipientId} = request

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
        });

        await this.notificationsRepositories.create(notification);

        return {
            notification,
        }
    }
}