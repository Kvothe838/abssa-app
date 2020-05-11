import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClientsAccessDialogComponent } from '../../dialogs/clients-access-dialog/clients-access-dialog.component';
import { ClientsAccessDataService } from '../../services/clients-access-data.service'
import { Client } from '../../model/client';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Input() sidenav: any;
	selectedClient: number;

  	constructor(public dialog: MatDialog, 
  				private clientsAccessService: ClientsAccessDataService) { }

  	ngOnInit(): void {
  	}

  	openClientsDialog() {
  		const options = this.clientsAccessService.getClientsAccessOptions();
		const dialogRef = this.dialog.open(ClientsAccessDialogComponent, {
	      width: '500px',
	      height: '300px',
	      data: {options}
	    });

	    dialogRef.afterClosed().subscribe(res => {
	    	if(res != undefined){
	    		this.selectedClient = res.selectedOption;
	      		this.clientsAccessService.openClientLogin(this.selectedClient);		
	    	} else {
	    		console.log("Ninguna opción seleccionada");
	    	}	      
	    });
  	}
}
