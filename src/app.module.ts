import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
	imports: [
		
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'db',
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
			synchronize: true
		}),
		MailerModule.forRoot({
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
	controllers: [],
})
export class AppModule {}
