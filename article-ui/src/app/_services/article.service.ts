import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment.prod';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type':  'application/json'
	})
};

@Injectable({ providedIn: 'root' })
export class ArticleService {
	
    constructor(private http: HttpClient) { }
    
    getAllArticles(){
        return this.http.get(`${environment.apiUrl}/articles`);
    }
	
	createArticle(user_id: number, title: string, description: string){
		this.http.post(`${environment.apiUrl}/articles`, {user_id, title, description}, httpOptions)
		.subscribe();
	}
}