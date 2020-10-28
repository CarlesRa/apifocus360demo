import { Module } from '@nestjs/common';
import { ContactsService } from './services/contacts/contacts.service';
import { ContactsController } from './controllers/contacts/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailController } from './controllers/email/email.controller';
import { EmailService } from './services/email/email.service';
import { Contact } from './model/contacts/contact.entity';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
	imports:[
		TypeOrmModule.forFeature([Contact]),
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'db',
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
			synchronize: true
		}),
		MailerModule.forRoot({
			transport: {
				host: 'smtp.gmail.com',
				prot: 587,
				secure: false,
				auth: {
					user: "focus360.demo@gmail.com",
					pass: "*Focus360",
				},
			},
			defaults: {
				from: '"nest-modules" <modules@nestjs.com>',
			}
		}),
	],
  providers: [ContactsService, EmailService],
  controllers: [ContactsController, EmailController]
})
export class ContactsModule {}
