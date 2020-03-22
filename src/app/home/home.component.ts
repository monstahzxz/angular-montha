import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public subjects = [
		{ name: 'database management', url: '../../assets/image/dbms.jpg' },
		{ name: 'computer network', url: '../../assets/image/cn.jpg' },
		{ name: 'cryptography', url: '../../assets/image/crypt.jpg' },
		{ name: 'machine learning', url: '../../assets/image/ml.jpg' }
	];

	constructor(private dialog: MatDialog) { }

	ngOnInit(): void {
	}
	accPop() {
		console.log('Account PopUp');
		// console.log('sada' + this.subject + 'sdf')
		const dialogConfig = new MatDialogConfig();

		dialogConfig.autoFocus = true;
		// dialogConfig.position = { 'top': '10', 'right': '0' };
		dialogConfig.height = '400px';
		dialogConfig.width = '300px';

		this.dialog.open(ProfileDialogComponent, dialogConfig);
	}
}
