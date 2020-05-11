import { Injectable } from '@angular/core';
import { Client } from '../model/client'

@Injectable({
  providedIn: 'root'
})
export class ClientsAccessDataService {

  constructor() { }

  public getClientsAccessOptions(): Client[]{
  	return [
  		{ id: 1, name: 'Avanter' },
  		{ id: 2, name: 'Omint' },
  		{ id: 3, name: 'RedLink' }
  	]
  }

  public openClientLogin(id: number) {
  	console.log("Abierto login de cliente con id ", id);
  }
}
