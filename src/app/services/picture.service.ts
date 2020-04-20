import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) { }
  public url: string = "http://localhost:3000/mob/sendImages";
  picture(body) {
    return this.http.post(this.url, body, { withCredentials: true });
  }
}
