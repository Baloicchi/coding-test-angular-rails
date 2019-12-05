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
        id: [id, Validators.required],
        title: [this.article.title, [Validators.required, Validators.maxLength(75), this.noWhiteSpace]],
        description: [this.article.description, [Validators.required, Validators.maxLength(5000), this.noWhiteSpace]]
      });
  	});
  }

  onSubmit() {
    this.articleService.updateArticle(
      this.articleEditForm.value.id,
      this.articleEditForm.value.title,
      this.articleEditForm.value.description)
    .subscribe(
      response => {
        this.alertService.setSuccessMsg("Article succesfully updated!");
        setTimeout(() => {
        this.alertService.clearSuccessMsg();
      }, 3000);
      },
      error => {
        this.alertService.setErrorMsg("Article could not be updated. Please try again.");
        setTimeout(() => {
        this.alertService.clearErrorMsg();
      }, 3000);
      }
      );
  }

  onDelete(id: number) {
    this.articleService.deleteArticle(id).subscribe(
      response => {
        this.alertService.setSuccessMsg("Article succesfully deleted!");
      },
      error => {
        this.alertService.setErrorMsg("Article could not be deleted. Please try again.");
      },
      () => {
        this.router.navigateByUrl('/articles');
      }
      );
  }

}
