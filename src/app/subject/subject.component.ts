import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';
import { Attendance } from '../models/user';
import { AbsPopComponent } from '../abs-pop/abs-pop.component';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {



    constructor(private router: Router, private dialog: MatDialog) {
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        this.sub = state.subject;
    }
    public sub: string;
    strength: number;
    hours: number;
    abs: Array<any>;
    ngOnInit(): void {

    }

    public subjects = [
        { name: 'database management', url: '/mob/private/getSubImg/dbms' },
        { name: 'computer network', url: '/mob/private/getSubImg/cn' },
        { name: 'cryptography', url: '/mob/private/getSubImg/crypt' },
        { name: 'machine learning', url: '/mob/private/getSubImg/ml' }
    ];

    demo() {
        console.log("camera evde?")
    }

    Pop() {
        console.log('Account PopUp');

        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        // dialogConfig.position = { 'top': '10', 'right': '0' };
        dialogConfig.height = '300px';
        dialogConfig.width = '350px';
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            hours: this.hours,
            abs: this.abs
        }

        let dialogRef = this.dialog.open(AbsPopComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            console.log(data);
        })
    }

    navi() {
        this.router.navigate(['home/subject/camera'], { state: { subject: this.sub } })
    }




}
