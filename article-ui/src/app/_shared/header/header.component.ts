import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { AuthenticationService } from '@app/_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  visible;
  currentUrl;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    // hide navbar links if login or register page
    this.router.events.subscribe((event) => { 
        event instanceof NavigationEnd ? this.currentUrl = event.url: null; 
        if(this.currentUrl && (this.currentUrl === '/login' || this.currentUrl === '/register')) {
          this.visible = false;
        } else {
          this.visible = true;
        }
      });
  }

  logout() {
  	this.authenticationService.logout();
  }

}
