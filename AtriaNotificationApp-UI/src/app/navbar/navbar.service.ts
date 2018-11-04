import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private sigin = new BehaviorSubject<boolean>(false);
  public sigin$ = this.sigin.asObservable();
  constructor() { }

  login() {
    this.sigin.next(true);
  }
}
