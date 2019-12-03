import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ArticlesComponent } from '@app/articles/articles.component';
import { ArticleListComponent } from '@app/articles/article-list/article-list.component';
import { UsersComponent } from '@app/users/users.component';
import { UserLoginComponent } from '@app/users/user-login/user-login.component';
import { UserRegisterComponent } from '@app/users/user-register/user-register.component';

import { JwtInterceptorHelper } from '@app/_helpers/jwt-interceptor.helper';
import { ErrorInterceptorHelper } from '@app/_helpers/error-interceptor.helper';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleListComponent,
    UsersComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorHelper, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorHelper, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
