import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Content } from '../../model/content.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private announcementID: string;

  constructor(private http: HttpClient) { }

  setAnnouncementID(id: string) {
    this.announcementID = id;
  }
  getAnnouncementID() {
    return this.announcementID;
  }

  getContents(id: string): Observable<Content[]> {
    // return of(mockEvents);
    return this.http.get<Content[]>(`${environment.apiEndPoint}/api/event/Announcement/${id.toString()}/Content`)
      .pipe(
        tap(contents => {
          this.log('fetched Contents');
          console.log(contents);
        }),
        catchError(this.handleError('getContents', []))
      );
  }

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
