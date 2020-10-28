import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Email } from 'src/contacts/model/email.model';

@Injectable()
export class EmailService {

	constructor(private readonly mailerService: MailerService) {}

	async sendEmail(email: Email): Promise<Email> {
		return await this.mailerService.
			sendMail({
				to: email.to,
				from: email.from,
				subject: email.subject,
				text: email.text,
			});
	} 
}
