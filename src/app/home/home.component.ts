import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private dialog: MatDialog) { }

	ngOnInit(): void {
	}
	accPop() {
		console.log('Account PopUp');
		const dialogConfig = new MatDialogConfig();

		dialogConfig.autoFocus = true;
		// dialogConfig.position = { 'top': '10', 'right': '0' };
		dialogConfig.height = '400px';
		dialogConfig.width = '300px';


		this.dialog.open(ProfileDialogComponent, dialogConfig);
	}
}
