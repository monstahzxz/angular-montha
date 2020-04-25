import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';
import { SubjectService } from '../services/subject.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public subjects: any;

	constructor(private dialog: MatDialog, private subService: SubjectService, private router: Router) { }

	ngOnInit(): void {
		this.getSub();
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


	getSub() {
		this.subService.getSubjects().subscribe((data) => {
			console.log(data);
			this.subjects = data;
		})
	}
	public sub;
	navi(sub) {
		console.log(sub);
		this.router.navigate(['home/subject'], { state: { subject: sub } });
	}
}
