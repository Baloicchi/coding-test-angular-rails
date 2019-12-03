import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class ArticleService {
    constructor(private http: HttpClient) { }
    
    public getAllArticles(){
        return this.http.get(`${environment.apiUrl}/articles`)
        .subscribe(response => { 
        });
    }
}