import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from 'src/contacts/model/contacts/contact.entity';

import { DeleteResult, getConnection, Repository } from 'typeorm';

@Injectable()
export class ContactsService {

	constructor(
		@InjectRepository(Contact)
		private contactRepository: Repository<Contact>
	) {}

	async getAll(): Promise<Contact[]> {

		return await this.contactRepository.find();
	}

	async getContactsByType(@Param('type') type: string): Promise<Contact[]> {
		
		return await getConnection().
			createQueryBuilder().
			select('contact').
			from(Contact, 'contact').
			where("contact.contactType = :contactType", { contactType: type}).
			getMany();
	}

	async getContactById(@Param('id') id: any) {
		return await getConnection().
			createQueryBuilder().
			select('contact').
			from(Contact, 'contact').
			where("contact.id = :id", { id: id}).
			getOne();
	}

	async create(contact: Contact): Promise<Contact> {
		
		return await this.contactRepository.save(contact);
	}

	async update(contact: Contact) {
		
		return await this.contactRepository.update(contact.id, contact);
	}

	async delete(id): Promise<DeleteResult> {

		return await this.contactRepository.delete(id);
	}
}
