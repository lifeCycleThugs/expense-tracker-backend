import { MailTransporter } from './mail-transporter';

class MailConfigClass {
    constructor() { }

    async otp(otp: string, email: string) {

        const subject: string = `OTP from virifi`;
        const html: string = `  <html>
                                    <body>
                                        <table>
                                            <tr>
                                                <th>OTP is - ${otp}</th>
                                            </tr>
                                        </table>
                                    </body>
                                </html>`;
        new MailTransporter(email, subject, html);
    };

    async invite(email: any, id: any) {

        const subject: string = `Invite Send`;
        const html: string = `  <html>
                                    <body>
                                        <table>
                                            <tr>
                                                <th>Invite Link http://192.168.29.204:3005/api/invite-user/accept-invite/${id}</th>
                                            </tr>
                                        </table>
                                    </body>
                                </html>`;
        new MailTransporter(email, subject, html);
    };
}

export const MailConfig = new MailConfigClass();