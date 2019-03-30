import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Event } from '../model/event.model';
import { Content } from '../model/content.model';
import { EventAnnouncementID } from '../model/event-announcement-id.model';
import { environment } from '../../environments/environment';
import { Announcement } from '../model';

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

  postEvent(event: Event) {
    return this.http.post(`${environment.apiEndPoint}/api/event`, event)
    .pipe(
      catchError(this.handleError('postEvent', []))
    );
  }

  deleteEvent(eventid) {
    const params = new HttpParams().set('guid', eventid);

    return this.http.delete(`${environment.apiEndPoint}/api/event`, { params })
    .pipe(
      catchError(this.handleError('deleteEvent', []))
    );
  }

  updateEvent(event: Event) {
    return this.http.put(`${environment.apiEndPoint}/api/event`, event)
    .pipe(
      catchError(this.handleError('updateEvent', []))
    );
  }

  postAnnouncement(eventid: string, announcement: Announcement) {
    return this.http.post(`${environment.apiEndPoint}/api/event/${eventid}/Announcement`, announcement)
    .pipe(
      catchError(this.handleError('updateEvent', []))
    );
  }

  updateAnnouncement(eventid: string, announcement: Announcement) {
    return this.http.put(`${environment.apiEndPoint}/api/event/${eventid}/Announcement`, announcement)
    .pipe(
      catchError(this.handleError('updateAnnouncement', []))
    );
  }

  getContents(id: string): Observable<Content[]> {
    return this.http.get<Content[]>(`${environment.apiEndPoint}/api/event/Announcement/${id.toString()}/Content`)
      .pipe(
        tap(contents => {
          this.log('fetched Contents');
          console.log(contents);
        }),
        catchError(this.handleError('getContents', []))
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

  updateContent(event_announcement_id: EventAnnouncementID, content: Content) {
    const event_id = event_announcement_id.event_id;
    const announcement_id = event_announcement_id.announcement_id;
    const content_id = event_announcement_id.content_id;
    return this.http.put(`${environment.apiEndPoint}/api/event/${event_id}/Announcement/${announcement_id}/content/${content_id}`, content)
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
