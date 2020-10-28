import { MailerService } from '@nestjs-modules/mailer';
import { Email } from 'src/contacts/model/email.model';
export declare class EmailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendEmail(email: Email): Promise<Email>;
}
