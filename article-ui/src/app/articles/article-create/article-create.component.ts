import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ArticleService } from '@app/_services/article.service';
import { UserService } from '@app/_services/user.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html'
})
export class ArticleCreateComponent implements OnInit {

  constructor( 
    private articleService: ArticleService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  // custom validator for whitespace
  noWhiteSpace(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  articleCreationForm = this.formBuilder.group({
    user_id: [localStorage.getItem("id"), Validators.required],
    title: ['', [Validators.required, Validators.maxLength(75), this.noWhiteSpace]],
    description: ['', [Validators.required, this.noWhiteSpace]]
  });

  ngOnInit() {
    
  }
  
  onSubmit() {
	  this.articleService.createArticle(
		this.articleCreationForm.value.user_id,
		this.articleCreationForm.value.title,
		this.articleCreationForm.value.description
	  );
  }

}
