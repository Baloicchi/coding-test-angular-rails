import { Component, OnInit } from '@angular/core';

import { ArticleService } from '@app/_services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles;

  constructor( private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getAllArticles();
  }

}
