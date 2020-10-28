import { Email } from 'src/contacts/model/email.model';
import { EmailService } from 'src/contacts/services/email/email.service';
export declare class EmailController {
    private emailService;
    constructor(emailService: EmailService);
    sendMail(email: Email): Promise<Email>;
}
