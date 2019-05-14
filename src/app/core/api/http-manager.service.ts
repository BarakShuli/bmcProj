import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpManagerService {

  constructor(private http: HttpClient) { }

  get(url:string) {
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods":"GET, POST",
      'Content-Type':  'application/xml',
      'Accept':  'application/xml'
    })
    
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage); // just 2 show some alert
    return throwError(errorMessage);
  }
}
