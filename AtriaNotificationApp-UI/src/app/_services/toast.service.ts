import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastMsg = new Subject<Object>();
  public messageToast$ = this.toastMsg.asObservable();

  constructor() { }

  setToastMsg(msg: Object) {
    this.toastMsg.next(msg);
  }
}
