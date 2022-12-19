/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";
import { MakeNotification } from "../../../test/factories/notification-factory";
import { UnreadNotification } from "./unread-notification";


describe('Unread notification', () => {
    it('shoud be able to unread a notification', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const unreadNotification = new UnreadNotification(notificationRepository);

        const notification = MakeNotification({
            readAt: new Date(),
        })

        await notificationRepository.create(notification);

        await unreadNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationRepository.notifications[0].readAt).toBeNull()
    });

    it('shoud not be able to unread a non existing notification', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const unreadNotification = new UnreadNotification(notificationRepository);

        expect(() => {
            return unreadNotification.execute({
                notificationId: 'fake-notification-id',
            });
        }).rejects.toThrow(NotificationNotFound)
    })
});