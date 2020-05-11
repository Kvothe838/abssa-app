export class FormData {
	name: string;
	email: string;
	phone: number;
	comment: string;

	constructor(name: string, email: string, phone: number, comment: string) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.comment = comment;
	}
}