import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment.prod';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type':  'application/json'
	})
};

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
	
	getName() {
		return localStorage.getItem('name');
	}
	
	getEmail() {
		return localStorage.getItem('email');
	}
	
	getId() {
		return localStorage.getItem('id');
	}

	createUser(email: string, name: string, password: string, password_confirmation: string) {
		return this.http.post(`${environment.apiUrl}/users`, {email, name, password, password_confirmation}, httpOptions);
	}

	checkEmail(email: string) {
		return this.http.post(`${environment.apiUrl}/user_search`, {email});
	}
}