import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Icon } from './competence.component';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  baseUrl = 'http://localhost/test'; 
  icons: Icon[];
  constructor(private http: HttpClient) { }


  getIcons(value : number): Observable<Icon[]> {
    return this.http.get(`${this.baseUrl}/competence.php?section=${value}`).pipe(
      map((res) => {
        this.icons = res['data'];
        return this.icons;
    }),
    catchError(this.handleError));
}


  private handleError(error: HttpErrorResponse) {
    console.log(error);
  
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

}