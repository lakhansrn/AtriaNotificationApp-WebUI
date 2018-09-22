import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Banner } from '../banner/banner.model';


@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private banners_url = 'https://localhost:5001/api/banner';
  constructor(private http: HttpClient) { }
  getBanners(): Observable<Banner[]> {
    // return of(mockEvents);
    return this.http.get<Banner[]>(this.banners_url)
      .pipe(
      tap(banners => {
        this.log('fetched Banners');
        console.log(banners);
      }),
      catchError(this.handleError('getBanners', []))
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
