import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  shouldLoad = new Subject<boolean>();
  setLoader$ = this.shouldLoad.asObservable();

  constructor() { }

  setLoader() {
    this.shouldLoad.next(true);
  }

  clearLoader() {
    this.shouldLoad.next(false);
  }
}
