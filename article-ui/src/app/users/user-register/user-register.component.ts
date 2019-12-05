import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from '@app/_services/alert.service';
import { UserService } from '@app/_services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

  constructor(private alertService: AlertService, 
  	private formBuilder: FormBuilder,
  	private userService: UserService,
  	private router: Router) { }

  // check if password and passwordConf match
  checkPasswords(group: FormGroup) { 
  	let pass = group.get('password').value;
  	let confirmPass = group.get('passwordConf').value;

  	return pass === confirmPass ? null : { notSame: true };   
  }

  // check if email doesn't exist
  checkEmail(control: AbstractControl) {
  	let emailAdd = control.value;
  	if(emailAdd) {
  		this.userService.checkEmail(emailAdd).subscribe(
  		response => {
  			let searchedEmail = response;
  			return searchedEmail['found'] ? { emailTaken: true } : false;
  		},
  		error => {

  		}
  		);
  	}
  	return null;
  }

  // shortcuts
  get f() { return this.userRegistrationForm.controls; }
  get r() { return this.userRegistrationForm; }

  userRegistrationForm = this.formBuilder.group({
  	name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email, this.checkEmail.bind(this)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    passwordConf: ['', Validators.required]
  }, {validator: [this.checkPasswords] });

  ngOnInit() {
  }

  onSubmit() {
  	this.userService.createUser(
  		this.userRegistrationForm.value.email,
  		this.userRegistrationForm.value.name,
  		this.userRegistrationForm.value.password,
  		this.userRegistrationForm.value.passwordConf).subscribe(
  		response => {
  			this.alertService.setSuccessMsg("User registered!");
  		}, error => {
  			this.alertService.setErrorMsg("Something went wrong during the registration. Please try again.");
  		},
  		() => {
  			this.router.navigateByUrl('/login');
  		});
  }

}
