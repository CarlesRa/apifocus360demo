import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ContactType } from 'src/contacts/enums/type.enum';
import { Contact } from 'src/contacts/model/contacts/contact.entity';
import { ContactsService } from 'src/contacts/services/contacts/contacts.service';

@Controller('contacts')
export class ContactsController {

	constructor(
		private contactsService: ContactsService
	){}

	@Get('/')
	async index(): Promise<Contact[]> {
		return await this.contactsService.getAll();
	}

	@Get('friends')
	async getFriends(): Promise<Contact[]> {

		return await this.contactsService.getContactsByType(ContactType.Amistad);
	}

	@Get('contact/:id')
	async getContactById(@Param('id') id) {
		return await this.contactsService.getContactById(id);
	}

	@Get('employees')
	async getWorkers(): Promise<Contact[]> {

		return await this.contactsService.getContactsByType(ContactType.Trabajador);
	}

	@Get('clients')
	async getClients(): Promise<Contact[]> {

		return await this.contactsService.getContactsByType(ContactType.Cliente)
	}

	@Post('create')
	async create(@Body() contactData: Contact): Promise<any> {
		
		return await this.contactsService.create(contactData);
	}


	@Put('update/:id')
	async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {

		contactData.id = Number(id);
		return await this.contactsService.update(contactData);
	}

	@Delete('delete/:id')
	async delete(@Param('id') id: string): Promise<any> {

		return await this.contactsService.delete(id);
	}
	//other Methods add
}
