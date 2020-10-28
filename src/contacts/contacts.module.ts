import { Module } from '@nestjs/common';
import { ContactsService } from './services/contacts/contacts.service';
import { ContactsController } from './controllers/contacts/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailController } from './controllers/email/email.controller';
import { EmailService } from './services/email/email.service';
import { Contact } from './model/contacts/contact.entity';

@Module({
	imports:[
		TypeOrmModule.forFeature([Contact])
	],
  providers: [ContactsService, EmailService],
  controllers: [ContactsController, EmailController]
})
export class ContactsModule {}
