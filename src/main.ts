import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { ContactsModule } from './contacts/contacts.module';


async function bootstrap() {

	const app = await NestFactory.create(ContactsModule);

	const options = new DocumentBuilder()
    .setTitle('Focus-Demo')
    .setDescription('Api para demo en Focus360º')
    .setVersion('0.1')
    .addTag('contacts')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);

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
