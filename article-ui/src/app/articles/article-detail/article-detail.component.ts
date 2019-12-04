import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ArticleService } from '@app/_services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article;

  constructor(
  	private articleService: ArticleService, 
  	private route: ActivatedRoute,
  	private router: Router,
  ) { }

  ngOnInit() {
  	let id = this.route.snapshot.paramMap.get('id');
	this.articleService.getArticle(id).subscribe(response => {
		this.article = response;
  	});
  }

}
