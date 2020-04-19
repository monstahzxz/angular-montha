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
        return this.http.post(this.api.base + this.api.login, body, { withCredentials: true });
    }

}
