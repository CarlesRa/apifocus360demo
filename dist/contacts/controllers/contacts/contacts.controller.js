"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsController = void 0;
const common_1 = require("@nestjs/common");
const type_enum_1 = require("../../enums/type.enum");
const contact_entity_1 = require("../../model/contacts/contact.entity");
const contacts_service_1 = require("../../services/contacts/contacts.service");
let ContactsController = class ContactsController {
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    async index() {
        return await this.contactsService.getAll();
    }
    async getFriends() {
        return await this.contactsService.getContactsByType(type_enum_1.ContactType.Amistad);
    }
    async getContactById(id) {
        return await this.contactsService.getContactById(id);
    }
    async getWorkers() {
        return await this.contactsService.getContactsByType(type_enum_1.ContactType.Trabajador);
    }
    async getClients() {
        return await this.contactsService.getContactsByType(type_enum_1.ContactType.Cliente);
    }
    async create(contactData) {
        return await this.contactsService.create(contactData);
    }
    async update(id, contactData) {
        contactData.id = Number(id);
        return await this.contactsService.update(contactData);
    }
    async delete(id) {
        return await this.contactsService.delete(id);
    }
};
__decorate([
    common_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "index", null);
__decorate([
    common_1.Get('friends'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "getFriends", null);
__decorate([
    common_1.Get('contact/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "getContactById", null);
__decorate([
    common_1.Get('employees'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "getWorkers", null);
__decorate([
    common_1.Get('clients'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "getClients", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_entity_1.Contact]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "create", null);
__decorate([
    common_1.Put('update/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, contact_entity_1.Contact]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "update", null);
__decorate([
    common_1.Delete('delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "delete", null);
ContactsController = __decorate([
    common_1.Controller('contacts'),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService])
], ContactsController);
exports.ContactsController = ContactsController;
//# sourceMappingURL=contacts.controller.js.map