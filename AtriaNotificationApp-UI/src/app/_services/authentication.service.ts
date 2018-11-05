import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private router: Router) {
            this.loggedIn.next(this.isAuthenticated());
            this.isRoleAnnouncer.next(this.isAnnouncer());
        }

    private loggedIn = new BehaviorSubject<boolean>(false);
    public login$ = this.loggedIn.asObservable();

    private isRoleAnnouncer = new BehaviorSubject<boolean>(false);
    public announcerRole$ = this.isRoleAnnouncer.asObservable();

    login(email: string, password: string) {
        const apiUrl = environment.apiEndPoint;
        return this.http.post<any>(`${apiUrl}/users/authenticate`, { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.token));
                }
                this.loggedIn.next(true);
                this.isRoleAnnouncer.next(this.isAnnouncer());
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
        this.loggedIn.next(false);
    }

    isAuthenticated() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    }

    isAnnouncer() {
        const token = localStorage.getItem('currentUser');

        // decode the token to get its payload
        if (token) {
            const tokenPayload = decode(token);
            if (!this.isAuthenticated() || tokenPayload.role !== 'announcer') {
                return false;
            }
        }

        return true;
    }
}
