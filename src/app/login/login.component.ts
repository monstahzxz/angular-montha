import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Login_response } from '../models/login_res'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	userModel = new User("", "");
	obData = {};
	public route: string = "/login";
	public loginC = false;
	constructor(private _loginService: AuthService,
		private router: Router) { }

	ngOnInit(): void {
	}

	public ob: any;

	onSubmit() {
		console.log(this.userModel);
		this._loginService.userVerify(this.userModel)
			.subscribe(data => {
				console.log(data);
				this.ob = <Login_response>data;
				if (this.ob.statusCode == 200) {
					this.router.navigate(['home']);
				}
			});
	}

}
