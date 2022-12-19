/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";
import { MakeNotification } from "../../../test/factories/notification-factory";
import { ReadNotification } from "./read-notification";


describe('Read notification', () => {
    it('shoud be able to read a notification', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(notificationRepository);

        const notification = MakeNotification()

        await notificationRepository.create(notification);

        await readNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationRepository.notifications[0].readAt).toEqual(expect.any(Date),) 
    });

    it('shoud not be able to read a non existing notification', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(notificationRepository);

        expect(() => {
            return readNotification.execute({
                notificationId: 'fake-notification-id',
            });
        }).rejects.toThrow(NotificationNotFound)
    })
});