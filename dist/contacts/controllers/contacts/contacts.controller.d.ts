import { Contact } from 'src/contacts/model/contacts/contact.entity';
import { ContactsService } from 'src/contacts/services/contacts/contacts.service';
export declare class ContactsController {
    private contactsService;
    constructor(contactsService: ContactsService);
    index(): Promise<Contact[]>;
    getFriends(): Promise<Contact[]>;
    getContactById(id: any): Promise<Contact>;
    getWorkers(): Promise<Contact[]>;
    getClients(): Promise<Contact[]>;
    create(contactData: Contact): Promise<any>;
    update(id: any, contactData: Contact): Promise<any>;
    delete(id: string): Promise<any>;
}
