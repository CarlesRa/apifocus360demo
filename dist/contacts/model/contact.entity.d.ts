import { ContactType } from "../enums/type.enum";
export declare class Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    country: string;
    contactType: ContactType;
}
