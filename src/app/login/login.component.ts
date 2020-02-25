import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	// ngOnInit(): void {
	//   document.body.classList.add("back");
	// }

	userModel = new User("", "");
	onSubmit() {
		console.log(this.userModel);
	}

}
