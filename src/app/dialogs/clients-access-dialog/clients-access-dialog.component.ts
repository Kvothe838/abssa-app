import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Client } from '../../model/client';

interface DialogData {
	options: Client[]
}

@Component({
  selector: 'app-clients-access-dialog',
  templateUrl: './clients-access-dialog.component.html',
  styleUrls: ['./clients-access-dialog.component.css']
})

export class ClientsAccessDialogComponent implements OnInit {
	options: Client[];
	selectedOption: number;

	constructor(public dialogRef: MatDialogRef<ClientsAccessDialogComponent>,
	@Inject(MAT_DIALOG_DATA) public data: DialogData) {
		this.options = data.options;
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	doLogin(): void {
		this.dialogRef.close({selectedOption: this.selectedOption});
	}

	ngOnInit(): void {
	}

}
