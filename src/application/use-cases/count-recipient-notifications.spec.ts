/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { CountRecipientNotification } from "./count-recipient-notifications";
import { MakeNotification } from "../../../test/factories/notification-factory";


describe('Count recipients notification', () => {
    it('shoud be able to count recipent notifications', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const countRecipenteNotifications = new CountRecipientNotification(notificationRepository);

        await notificationRepository.create(MakeNotification({recipientId: 'recipient-1'}));

        await notificationRepository.create(MakeNotification({recipientId: 'recipient-1'}));

        await notificationRepository.create(MakeNotification({recipientId: 'recipient-2'}));

        const { count } = await countRecipenteNotifications.execute({
            recipientId: 'recipient-1'
        });

        expect(count).toEqual(2) 
    });


});