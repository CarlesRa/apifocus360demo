import { Contact } from 'src/contacts/model/contacts/contact.entity';
import { DeleteResult, Repository } from 'typeorm';
export declare class ContactsService {
    private contactRepository;
    constructor(contactRepository: Repository<Contact>);
    getAll(): Promise<Contact[]>;
    getContactsByType(type: string): Promise<Contact[]>;
    getContactById(id: any): Promise<Contact>;
    create(contact: Contact): Promise<Contact>;
    update(contact: Contact): Promise<import("typeorm").UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
