import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '@app/_services/authentication.service';
import { AlertService } from '@app/_services/alert.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
	
data;
error;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  userLoginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  
  ngOnInit() {
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

  onSubmit() {
    this.authenticationService.login(this.userLoginForm.value.email, this.userLoginForm.value.password)
    .subscribe(response => { 
      this.data = response; 
      localStorage.setItem('currentUser', JSON.stringify(this.data));
      localStorage.setItem('token', this.data.token);
      localStorage.setItem('exp', this.data.exp);
      localStorage.setItem('id', this.data.id);
      localStorage.setItem('email', this.data.email);
      localStorage.setItem('name', this.data.name);
      this.router.navigate(['']);
    }, err => {
      this.error = err;
      setTimeout(() => {
        this.error = null;
      }, 3000);
    });
  }
}
