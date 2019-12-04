import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}