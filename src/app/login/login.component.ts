import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Login_response } from '../models/login_res'
import { NgxSpinnerService } from 'ngx-spinner';

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
		private router: Router,
		private spinner: NgxSpinnerService) { }

	ngOnInit(): void {
		// this.sessionVerify();
		// this.spinner.show();

		// setTimeout(() => {
		// 	/** spinner ends after 5 seconds */
		// 	this.spinner.hide();
		// }, 5000);
	}

	sessionVerify() {
		this._loginService.userCheck().subscribe((res: any) => {
			console.log(res);
			if (res == 'verify success') {
				this.router.navigate(['home']);
			}
		})
	}

	public ob: any;

	onSubmit() {
		console.log(this.userModel);
		this.spinner.show();
		this._loginService.userVerify(this.userModel)
			.subscribe(data => {
				console.log(data);
				this.spinner.hide();
				this.ob = <Login_response>data;
				if (this.ob.statusCode == 200) {
					this.router.navigate(['home']);
				}
			});
	}

}
