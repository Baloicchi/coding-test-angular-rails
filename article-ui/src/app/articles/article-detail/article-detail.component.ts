import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ArticleService } from '@app/_services/article.service';
import { UserService } from '@app/_services/user.service';
import { AlertService } from '@app/_services/alert.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article;
  isAuthor: boolean;
  articleEditForm;

  constructor(
  	private articleService: ArticleService, 
    private userService: UserService, 
    private alertService: AlertService,
  	private route: ActivatedRoute,
  	private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  // custom validator for whitespace
  noWhiteSpace(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  ngOnInit() {
  	let id = this.route.snapshot.paramMap.get('id');
    let user_id = this.userService.getId();
	  this.articleService.getArticle(id).subscribe(response => {
		  this.article = response;
      this.isAuthor = user_id == this.article.user_id ? true : false;
      this.articleEditForm = this.formBuilder.group({
        title: [this.article.title, [Validators.required, Validators.maxLength(75), this.noWhiteSpace]],
        description: [this.article.description, [Validators.required, this.noWhiteSpace]]
      });
  	});
  }

  onSubmit() {

  }

  onDelete(id: number) {
    this.articleService.deleteArticle(id).subscribe(
      response => {
        console.log("dleete");
        this.alertService.setSuccessMsg("Article succesfully deleted!");
        console.log(this.alertService.getSuccessMsg());
      },
      error => {
        
      },
      () => {
        this.router.navigate(['articles']);
      }
      );
  }

}
