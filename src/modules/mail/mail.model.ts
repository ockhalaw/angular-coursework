export interface IMailBox {
    title: string;
}

export interface ILetter {
    mailbox: string;
    subject: string;
    body: string;
    to: string;
}