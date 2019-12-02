import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { UserService } from '@app/users/shared/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  userLoginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  

  ngOnInit() {
  }

  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.userLoginForm.value);
}

}
