import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@app/_services/authentication.service';
import { HeaderHideService } from '@app/_services/header-hide.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, public headerHideService: HeaderHideService) { }

  ngOnInit() {
  }

  logout() {
  	this.authenticationService.logout();
  }

}
