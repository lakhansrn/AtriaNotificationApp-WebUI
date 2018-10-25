import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private uploadPreset = 'k7kv3x7e';
  private cloudName = 'drvpgz7gl';
  private secureUrl = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;

  constructor(private http: HttpClient) { }

  uploadImage(file: File) {
    const headers = new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' });
    const options = { headers: headers };
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', this.uploadPreset);
    return this.http.post(this.secureUrl, fd, options)
    .pipe(
      catchError(this.handleError('uploadImage', []))
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
