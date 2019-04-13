import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Board } from '../model/board.model';
import { Content } from '../model/content.model';
import { BoardAnnouncementID } from '../model/board-announcement-id.model';
import { environment } from '../../environments/environment';
import { Announcement } from '../model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  getBoards() {
    return this.http.get<Board[]>(`${environment.apiEndPoint}/api/board`)
    .pipe(
      catchError(this.handleError('getBoards', []))
    );
  }

  postBoard(board: Board) {
    return this.http.post(`${environment.apiEndPoint}/api/board`, board)
    .pipe(
      catchError(this.handleError('postBoard', []))
    );
  }

  deleteBoard(eventid) {
    const params = new HttpParams().set('guid', eventid);

    return this.http.delete(`${environment.apiEndPoint}/api/board`, { params })
    .pipe(
      catchError(this.handleError('deleteBoard', []))
    );
  }

  updateBoard(board: Board) {
    return this.http.put(`${environment.apiEndPoint}/api/board`, board)
    .pipe(
      catchError(this.handleError('updateBoard', []))
    );
  }

  postAnnouncement(eventid: string, announcement: Announcement) {
    return this.http.post(`${environment.apiEndPoint}/api/board/${eventid}/Announcement`, announcement)
    .pipe(
      catchError(this.handleError('updateBoard', []))
    );
  }

  updateAnnouncement(eventid: string, announcement: Announcement) {
    return this.http.put(`${environment.apiEndPoint}/api/board/${eventid}/Announcement`, announcement)
    .pipe(
      catchError(this.handleError('updateAnnouncement', []))
    );
  }

  getContents(id: string): Observable<Content[]> {
    return this.http.get<Content[]>(`${environment.apiEndPoint}/api/board/Announcement/${id.toString()}/Content`)
      .pipe(
        tap(contents => {
          this.log('fetched Contents');
          console.log(contents);
        }),
        catchError(this.handleError('getContents', []))
      );
  }

  postContent(event_announcement_id: BoardAnnouncementID, content: Content) {
    const board_id = event_announcement_id.board_id;
    const announcement_id = event_announcement_id.announcement_id;
    return this.http.post(`${environment.apiEndPoint}/api/board/${board_id}/announcement/${announcement_id}/content`, content)
    .pipe(
      catchError(this.handleError('postContent', []))
    );
  }

  updateContent(event_announcement_id: BoardAnnouncementID, content: Content) {
    const board_id = event_announcement_id.board_id;
    const announcement_id = event_announcement_id.announcement_id;
    const content_id = event_announcement_id.content_id;
    return this.http.put(`${environment.apiEndPoint}/api/board/${board_id}/Announcement/${announcement_id}/content/${content_id}`, content)
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
    console.log(`Board Service: ${message}`);
  }
}
