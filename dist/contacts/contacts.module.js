"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsModule = void 0;
const common_1 = require("@nestjs/common");
const contacts_service_1 = require("./services/contacts/contacts.service");
const contacts_controller_1 = require("./controllers/contacts/contacts.controller");
const typeorm_1 = require("@nestjs/typeorm");
const email_controller_1 = require("./controllers/email/email.controller");
const email_service_1 = require("./services/email/email.service");
const contact_entity_1 = require("./model/contacts/contact.entity");
const mailer_1 = require("@nestjs-modules/mailer");
let ContactsModule = class ContactsModule {
};
ContactsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([contact_entity_1.Contact]),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true
            }),
            mailer_1.MailerModule.forRoot({
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
        providers: [contacts_service_1.ContactsService, email_service_1.EmailService],
        controllers: [contacts_controller_1.ContactsController, email_controller_1.EmailController]
    })
], ContactsModule);
exports.ContactsModule = ContactsModule;
//# sourceMappingURL=contacts.module.js.map