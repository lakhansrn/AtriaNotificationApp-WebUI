import { Injectable } from '@angular/core';
import { Board } from '../../model/board.model';
import { Observable, of } from 'rxjs';
// import { mockEvents } from '../mock-events';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  getBoards(): Observable<Board[]> {
    // return of(mockEvents);
    return this.http.get<Board[]>(`${environment.apiEndPoint}/api/board`)
      .pipe(
        tap(banners => {
          this.log('fetched Board');
          console.log(banners);
        }),
        catchError(this.handleError('getBoards', []))
      );
  }

  // getMockEvents(): Observable<Board[]> {
  //   return of(mockEvents);
  // }

  private log(arg0: string): any {
    console.log(arg0);
  }

  private handleError<T>(operation = 'operation', result?: T) {
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
