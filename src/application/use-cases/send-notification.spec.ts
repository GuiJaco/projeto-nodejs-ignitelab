/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notifications";

describe('Send notification', () => {
    it('shoud be able to send a notification', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const sendNotification = new SendNotification(notificationRepository);

        const {notification} = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipient-id',
        });

        expect(notificationRepository.notifications).toHaveLength(1);
        expect(notificationRepository.notifications[0]).toEqual(notification);
    });
});