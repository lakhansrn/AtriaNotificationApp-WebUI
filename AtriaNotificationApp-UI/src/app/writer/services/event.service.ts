import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../../model/event.model';
import { Content } from '../../model/content.model';
import { EventAnnouncementID } from '../models/event-announcement-id.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<Event[]>(`${environment.apiEndPoint}/api/event`)
    .pipe(
      catchError(this.handleError('getEvents', []))
    );
  }

  postContent(event_announcement_id: EventAnnouncementID, content: Content) {
    const event_id = event_announcement_id.event_id;
    const announcement_id = event_announcement_id.announcement_id;
    return this.http.post(`${environment.apiEndPoint}/api/event/${event_id}/announcement/${announcement_id}/content`, content)
    .pipe(
      catchError(this.handleError('postContent', []))
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