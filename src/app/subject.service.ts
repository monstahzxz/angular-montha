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

  getImg(url: string): any {
    // console.log(url);
    return this.http.get('http://localhost:3000' + url, { responseType: 'blob', withCredentials: true }).pipe(
      map((res: any) => {
        const urlCreator = window.URL;
        return this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(res));
      })
    );
  }

}
