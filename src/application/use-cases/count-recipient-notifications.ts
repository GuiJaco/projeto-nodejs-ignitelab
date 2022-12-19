/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { NotificationsRepositories } from "../repositories/notifications-repositories";

interface ICountRecipientNotification {
    recipientId: string;
};

interface ICountRecipientNotificationResponse {
    count: number;
};

@Injectable()
export class CountRecipientNotification {
    constructor(
        private notificationsRepositories: NotificationsRepositories) {}

    async execute(request: ICountRecipientNotification): Promise<ICountRecipientNotificationResponse> {
        const {recipientId} = request

        const count = await this.notificationsRepositories.countManyByRecipientId(recipientId)

        return {count}
    }
}