/* eslint-disable prettier/prettier */
import { Replace } from "@helpers/Replace";
import { Content } from "./content";
import { randomUUID } from 'node:crypto'

export interface INotifications {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    cancelAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private _id: string;
    private props: INotifications;

    constructor(props: Replace<INotifications, { createdAt?: Date}>, id?: string) {
        this._id = id ?? randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        };
    }

    public get id() {
        return this._id;
    }

    public set recipientId(recipientId: string) {
       this.props.recipientId = recipientId;
    }
    
    public get recipientId(): string {
        return this.props.recipientId;
    }

    public set content(content: Content) {
        this.props.content = content;
     }
     
     public get content(): Content {
         return this.props.content;
     }

     public set category(category: string) {
        this.props.category = category;
     }
     
     public get category(): string {
         return this.props.category;
     }

     public read() {
        this.props.readAt = new Date();
     }

     public unRead() {
        this.props.readAt = null;
     }
     
     public get readAt(): Date | null | undefined {
         return this.props.readAt;
     }

     public cancel() {
        this.props.cancelAt = new Date();
     }

     public get cancelAt(): Date | null | undefined {
         return this.props.cancelAt;
     }
     
     public get createdAt(): Date {
         return this.props.createdAt;
     }

}

