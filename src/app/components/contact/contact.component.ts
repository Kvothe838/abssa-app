import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormData } from '../../model/formData.model';
import { ContactDataService } from '../../services/contact-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
	contactForm: FormGroup;
	nameCtrl = new FormControl('', Validators.required);
	emailCtrl = new FormControl('', [Validators.required, Validators.email]);
	phoneCtrl = new FormControl('', Validators.required);
	commentCtrl = new FormControl('', Validators.required);
	durationInSeconds = 3;

	constructor(fb: FormBuilder, 
				private snackBar: MatSnackBar,
				private contactData: ContactDataService) {
		this.contactForm = fb.group({
			name: this.nameCtrl,
			email: this.emailCtrl,
			phone: this.phoneCtrl,
			comment: this.commentCtrl
		});
	}

	onFormSubmit(): boolean {
		if(this.contactForm.invalid){
			return false;
		}
		this.sendForm();
    	this.confirmFormSent();
	}

	sendForm() {
    	console.log('Enviando formulario');
    	const formData = new FormData(this.nameCtrl.value, this.emailCtrl.value, this.phoneCtrl.value, this.commentCtrl.value);
    	this.contactData.saveFormData(formData);
	}

	confirmFormSent() {
		this.snackBar.open('Formulario enviado', '', {
      		duration: this.durationInSeconds * 1000,
    	});
    	this.contactForm.reset();
	}

}
