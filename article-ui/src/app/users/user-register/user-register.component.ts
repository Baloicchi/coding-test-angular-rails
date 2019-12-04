import { Component, OnInit } from '@angular/core';

import { HeaderHideService } from '@app/_services/header-hide.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(public headerHideService: HeaderHideService) { }

  ngOnInit() {
  	this.headerHideService.hide();
  }

}
