import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

	onSubmit() {
		console.log(this.userModel);
		this._loginService.userVerify(this.userModel)
			.subscribe(data => {
				console.log(data);
				if (data.statusCode == 200) {
					this.router.navigate(['home']);
				}
				console.log(this.route)
			});

	}


}
