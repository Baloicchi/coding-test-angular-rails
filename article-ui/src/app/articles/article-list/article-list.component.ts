import { Component, OnInit } from '@angular/core';

import { ArticleService } from '@app/_services/article.service';
import { AlertService } from '@app/_services/alert.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: any = [];

  constructor( private articleService: ArticleService, private alertService: AlertService) { }

  ngOnInit() {
  	this.articleService.getAllArticles().subscribe(response => {
  		this.articles = response;
  	});

    if (this.alertService.getSuccessMsg()) {
      setTimeout(() => {
        this.alertService.clearSuccessMsg();
      }, 3000);
    }

    if (this.alertService.getErrorMsg()) {
      setTimeout(() => {
        this.alertService.clearErrorMsg();
      }, 3000);
    }
  }

}
