import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { UserLoginComponent } from "@app/users/user-login/user-login.component";
import { HeaderHideService } from "@app/_services/header-hide.service";

@Injectable()
export class HeaderShowService implements CanDeactivate<UserLoginComponent> {

  constructor(public headerHideService: HeaderHideService) { }

  canDeactivate(target: UserLoginComponent) {
    this.headerHideService.show();
    return true;
  }

}