import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiEndPoint = environment.apiEndPoint;

  constructor(private http: HttpClient) { }

  getRegisterDetails(id: string) {
    return this.http.get(`${this.apiEndPoint}/Users/register/user/${id}`)
    .pipe(
      catchError(this.handleError('getRegisterDetails', []))
    );
  }

  register(user: User) {
    return this.http.post(`${this.apiEndPoint}/Users/complete_register/user`, user)
    .pipe(
      catchError(this.handleError('register', []))
    );
  }

  private log(arg0: string): any {
    console.log(arg0);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
