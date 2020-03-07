import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	userModel = new User("", "");
	obData = {};

	constructor(private _loginService: AuthService) { }

	ngOnInit(): void { }

	onSubmit() {
		console.log(this.userModel);
		this._loginService.userVerify(this.userModel)
			.subscribe(data => {
				console.log(data);

			});

	}



}
