/* eslint-disable prettier/prettier */
import { Content } from "../../src/application/entities/content";
import { Notification, INotifications } from "../../src/application/entities/notification";

type Override = Partial<INotifications>

    export function MakeNotification(override: Override = {}) {
        return new Notification({
            category: 'social',
            content: new Content('Nova Solicitação de Amizade'),
            recipientId: 'recipient-2',
            ...override,
        })
    }