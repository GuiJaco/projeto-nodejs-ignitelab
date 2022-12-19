/* eslint-disable prettier/prettier */

import { Content } from "./content";
import { Notification } from "./notification";

describe('Notfication',() => {
    it('should be able to creat a notification', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade'),
            category: 'social',
            recipientId: 'example-recipent-id',
        });
    
        expect(notification).toBeTruthy();
    });
})
