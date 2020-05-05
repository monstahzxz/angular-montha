import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Login_response } from '../models/login_res';
import { Verify } from "../models/user";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	userModel = new User("", "");
	public ob: any;
	public verOb: any;
	public wrongEntry: boolean = false;
	public showLogin: boolean = false;

	constructor(private _loginService: AuthService,
		private router: Router,
		private spinner: NgxSpinnerService) { }

	ngOnInit(): void {
		this.sessionVerify();
	}



	sessionVerify() {
		this._loginService.userCheck().subscribe((res: any) => {
			this.verOb = <Verify>res;
			if (this.verOb.isVerified) {
				this.router.navigate(['home']);
			}
			else {
				this.showLogin = true;
			}
		})
	}

	onSubmit() {
		console.log(this.userModel);
		this.spinner.show();
		this._loginService.userVerify(this.userModel)
			.subscribe((data) => {
				console.log(data);
				this.spinner.hide();
				this.ob = <Login_response>data;
				if (this.ob.statusCode == 200) {
					this.router.navigate(['home']);
				}
			}, (error) => {
				this.spinner.hide();
				console.log(error["status"]);
				this.wrongEntry = true;
			});
	}

}
