import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

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
        // this.chartFun();
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

    // public myPie;
    // chartFun() {
    //     this.myPie = new Chart('canvas', {
    //         type: 'pie',
    //         data: {
    //             datasets: [{
    //                 data: [10, 20, 30]
    //             }],
    //             labels: [
    //                 'Red',
    //                 'Yellow',
    //                 'Blue'
    //             ]
    //         }
    //     });
    // }

}
