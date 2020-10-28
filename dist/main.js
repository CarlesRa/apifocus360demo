"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const document_builder_1 = require("@nestjs/swagger/dist/document-builder");
const swagger_module_1 = require("@nestjs/swagger/dist/swagger-module");
const contacts_module_1 = require("./contacts/contacts.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(contacts_module_1.ContactsModule);
    const options = new document_builder_1.DocumentBuilder()
        .setTitle('Focus-Demo')
        .setDescription('Api para demo en Focus360º')
        .setVersion('0.1')
        .addTag('contacts')
        .build();
    const document = swagger_module_1.SwaggerModule.createDocument(app, options);
    swagger_module_1.SwaggerModule.setup('api', app, document);
    const optionsCors = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: false,
    };
    app.enableCors(optionsCors);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map