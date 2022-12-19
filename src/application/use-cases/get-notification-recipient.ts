/* eslint-disable prettier/prettier */
import { Notification } from "@application/entities/notification";
import { Injectable } from "@nestjs/common";
import { NotificationsRepositories } from "../repositories/notifications-repositories";

interface IGetRecipientNotification {
    recipientId: string;
};

interface IGetRecipientNotificationResponse {
    notifications: Notification[];
};

@Injectable()
export class GetRecipientNotification {
    constructor(
        private notificationsRepositories: NotificationsRepositories) {}

    async execute(request: IGetRecipientNotification): Promise<IGetRecipientNotificationResponse> {
        const {recipientId} = request

        const notifications = await this.notificationsRepositories.findManyByRecipientId(recipientId)

        return {notifications}
    }
}