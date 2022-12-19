/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { MakeNotification } from "../../../test/factories/notification-factory";
import { GetRecipientNotification } from "./get-notification-recipient";


describe('Get recipients notification', () => {
    it('shoud be able to get recipent notifications', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const getRecipenteNotifications = new GetRecipientNotification(notificationRepository);

        await notificationRepository.create(MakeNotification({recipientId: 'recipient-1'}));

        await notificationRepository.create(MakeNotification({recipientId: 'recipient-1'}));

        await notificationRepository.create(MakeNotification({recipientId: 'recipient-2'}));

        const { notifications } = await getRecipenteNotifications.execute({
            recipientId: 'recipient-1'
        });

        expect(notifications).toHaveLength(2) 
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'recipient-1'}),
            expect.objectContaining({ recipientId: 'recipient-1'}),
        ])) 
    });


});