import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../model';
import { AuthenticationService } from './authentication.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient,
        private authenticationService: AuthenticationService) {
    }

    getAll() {
        const apiUrl = environment.apiEndPoint;
        return this.http.get<User[]>(`${apiUrl}/users`);
    }

    registerUser(form: Object) {
        return this.http.post(`${environment.apiEndPoint}/Users/register/contentWriter`, form)
        .pipe(
            catchError(this.handleError('registerUser', []))
        );
    }

    getDetails() {
        const jwt = this.authenticationService.getUserJwt();
        if (jwt) {
            return this.http.get<any>(`${environment.apiEndPoint}/Users/${jwt}`)
                .pipe(
                    catchError(this.handleError('getDetails', []))
                );
        }
        return null;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
