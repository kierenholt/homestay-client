export interface Message {
    content: string;
    id: number;
    senderEmail: string;
    hasBeenRead: boolean;
}