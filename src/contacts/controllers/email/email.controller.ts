import { Body, Controller, Post } from '@nestjs/common';
import { Email } from 'src/contacts/model/email.model';
import { EmailService } from 'src/contacts/services/email/email.service';

@Controller('email')
export class EmailController {

	constructor(private emailService: EmailService) {}

	@Post('send')
	sendMail(@Body() email: Email) {

		return this.emailService.sendEmail(email);
	}
}
