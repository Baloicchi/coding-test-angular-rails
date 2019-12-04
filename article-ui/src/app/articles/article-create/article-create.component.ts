import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  
  articleCreationForm = this.formBuilder.group({
	user_id: [localStorage.getItem('id'), Validators.required],
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', Validators.required],
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
