import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    api = environment.apiUrl;

    constructor(private http: HttpClient) { }

    userVerify(body) {
        console.log(this.api.base + this.api.login)
        return this.http.post(this.api.base + this.api.login, body);
        // return this.http.post('http://localhost:3000/mob/login', body);
        // console.log(this.api.base)
    }



}
