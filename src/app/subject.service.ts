import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getSubjects() {
    return this.http.get('http://localhost:3000/mob/private/getSubjects', { withCredentials: true })
  }

}
