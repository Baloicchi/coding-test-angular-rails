import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '@environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router) {
    }

    public isLoggedIn() {
        return localStorage.getItem('currentUser') !== null;
    }
1
    // login - store JWT in local storage
    login(email: string, password: string) {
        return this.http.post(`${environment.apiUrl}/auth/login`, { email, password });    
    }

    // logout
    logout() {
        // remove from local storage
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}