import { Injectable } from '@angular/core';
import { Observable, of as _observableOf, throwError as _observableThrow } from 'rxjs';
import { HttpClient, HttpResponseBase, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationGeneratedService {

  private baseUrl: String;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiEndPoint;
  }

  subscribe(sub: PushSubscription | null): Observable<void> {
    let url_ = this.baseUrl + '/api/notification/subscribe';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(sub);

    const options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSubscribe(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSubscribe(<any>response_);
        } catch (e) {
          return <Observable<void>><any>_observableThrow(e);
        }
      } else {
        return <Observable<void>><any>_observableThrow(response_);
      }
    }));
  }

  protected processSubscribe(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    const _headers: any = {};
    if (response.headers) { for (const key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return _observableOf<void>(<any>null);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<void>(<any>null);
  }

  unsubscribe(sub: PushSubscription | null): Observable<void> {
    let url_ = this.baseUrl + '/api/notification/unsubscribe';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(sub);

    const options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUnsubscribe(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUnsubscribe(<any>response_);
        } catch (e) {
          return <Observable<void>><any>_observableThrow(e);
        }
      } else {
        return <Observable<void>><any>_observableThrow(response_);
      }
    }));
  }

  protected processUnsubscribe(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    const _headers: any = {};
    if (response.headers) { for (const key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return _observableOf<void>(<any>null);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<void>(<any>null);
  }

  broadcast(message: NotificationModel | null): Observable<void> {
    let url_ = this.baseUrl + '/api/notification/broadcast';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(message);

    const options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processBroadcast(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processBroadcast(<any>response_);
        } catch (e) {
          return <Observable<void>><any>_observableThrow(e);
        }
      } else {
        return <Observable<void>><any>_observableThrow(response_);
      }
    }));
  }

  protected processBroadcast(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    const _headers: any = {};
    if (response.headers) { for (const key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return _observableOf<void>(<any>null);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException('An unexpected server error occurred.', status, _responseText, _headers);
      }));
    }
    return _observableOf<void>(<any>null);
  }


}


export interface PushSubscription {
  endPoint?: string | undefined;
  auth?: string | undefined;
  p256Dh?: string | undefined;
}

export interface NotificationModel {
  title?: string | undefined;
  message?: string | undefined;
  url?: string | undefined;
}


function blobToText(blob: any): Observable<string> {
  return new Observable<string>((observer: any) => {
    if (!blob) {
      observer.next('');
      observer.complete();
    } else {
      const reader = new FileReader();
      reader.onload = function () {
        observer.next(this.result);
        observer.complete();
      };
      reader.readAsText(blob);
    }
  });
}

// tslint:disable-next-line:max-line-length
function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
  if (result !== null && result !== undefined) {
      console.log('resukt: ', result);
      return _observableThrow(result);
  } else {
    console.log('resukt1: ', result);
      return _observableThrow(message);
  }
}
