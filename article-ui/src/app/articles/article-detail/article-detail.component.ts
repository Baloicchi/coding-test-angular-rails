import { Component, OnInit } from '@angular/core';

import { ArticleService } from '@app/_services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleListComponent implements OnInit {

  article;

  constructor( private articleService: ArticleService) { }

  ngOnInit() {
    this.article = this.articleService.getAllArticles();
  }

}
