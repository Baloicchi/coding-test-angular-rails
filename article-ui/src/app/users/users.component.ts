import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ArticleService } from '@app/_services/article.service';
import { UserService } from '@app/_services/user.service';
import { AlertService } from '@app/_services/alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
  	private articleService: ArticleService,
    private userService: UserService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
  }

}
