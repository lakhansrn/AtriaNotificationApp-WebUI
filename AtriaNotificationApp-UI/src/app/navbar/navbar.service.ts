import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private sigin = new BehaviorSubject<boolean>(false);
  public sigin$ = this.sigin.asObservable();
  constructor(private authenticationService: AuthenticationService) { }

  login() {
    let display: boolean;
    this.authenticationService.login$.subscribe(isloggedin => display = isloggedin);
    if (!display) {
      this.sigin.next(true);
    }
  }
}
