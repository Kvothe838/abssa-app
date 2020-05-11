import { Injectable } from '@angular/core';
import { FormData } from '../model/formData.model'

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor() { }

  saveFormData(data: FormData){
  	console.log("Datos de formulario guardados en bd");
  	console.log("Nombre: ", data.name);
  	console.log("Email: ", data.email);
  	console.log("Teléfono: ", data.phone);
  	console.log("Motivo: ", data.comment);
  }
}
