import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

    public sub: string;

    constructor(private router: Router) {
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        this.sub = state.subject;
    }

    ngOnInit(): void {
    }

    // public subjects = [
    //     { name: 'database management', url: '/mob/private/getSubImg/dbms' },
    //     { name: 'computer network', url: '/mob/private/getSubImg/cn' },
    //     { name: 'cryptography', url: '/mob/private/getSubImg/crypt' },
    //     { name: 'machine learning', url: '/mob/private/getSubImg/ml' }
    // ];
    demo() {
        console.log("camera evde?")
    }
}
