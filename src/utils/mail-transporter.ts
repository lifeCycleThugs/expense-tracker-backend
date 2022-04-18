import nodemailer from 'nodemailer';
require('dotenv').config();

export class MailTransporter {
    [x: string]: string;

    email: string;
    subject: string;
    html: string;
    constructor(email:string, subject:string, html:string) {

        this.email = email;
        this.subject = subject;
        this.html = html;

        const sendMail: any = {
            from: `"Virifi" <${process.env.MAIL_EMAIL}>`,
            to: `${this.email}`,
            subject: this.subject,
            html: this.html,
        }

        nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${process.env.MAIL_EMAIL}`,
                pass: `${process.env.MAIL_PASS}`,
            },
        }).sendMail(sendMail);
    }
}
