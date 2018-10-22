import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = 'https://atrianotificationrestapi.azurewebsites.net';
  private localUrl = 'http://localhost:50831';


  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<Event[]>(`${this.localUrl}/api/event`)
    .pipe(
      catchError(this.handleError('getEvents', []))
    );
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

  private log(message: string) {
    console.log(`Event Service: ${message}`);
  }
}
