import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../model';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        const apiUrl = environment.apiEndPoint;
        return this.http.get<User[]>(`${apiUrl}/users`);
    }
}
