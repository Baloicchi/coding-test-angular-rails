import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '@environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    data;

    constructor(private http: HttpClient, private router: Router) {
    }

    public isLoggedIn() {
        return localStorage.getItem('currentUser') !== null;
    }

    // login - store JWT in local storage
    login(email: string, password: string) {
        this.http.post(`${environment.apiUrl}/auth/login`, { email, password })
        .subscribe(response => { 
            this.data = response; 
            localStorage.setItem('currentUser', JSON.stringify(this.data));
            localStorage.setItem('token', this.data.token);
            localStorage.setItem('exp', this.data.exp);
            localStorage.setItem('id', this.data.id);
            localStorage.setItem('email', this.data.email);
			localStorage.setItem('name', this.data.name);
            this.router.navigate(['']);
        });    
    }

    // logout
    logout() {
        // remove from local storage
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}