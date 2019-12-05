import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    getArticle(id: string){
    	return this.http.get(`${environment.apiUrl}/articles/${id}`);
    }
	
	createArticle(user_id: number, title: string, description: string){
		return this.http.post(`${environment.apiUrl}/articles`, {user_id, title, description}, httpOptions);
	}

	updateArticle(id: number, title: string, description: string) {
		return this.http.put(`${environment.apiUrl}/articles/${id}`, {id, title, description});
	}

	deleteArticle(id: number) {
		return this.http.delete(`${environment.apiUrl}/articles/${id}`);
	}
}