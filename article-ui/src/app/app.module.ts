import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ArticlesComponent } from '@app/articles/articles.component';
import { ArticleListComponent } from '@app/articles/article-list/article-list.component';
import { ArticleDetailComponent } from '@app/articles/article-detail/article-detail.component';
import { ArticleCreateComponent } from '@app/articles/article-create/article-create.component';
import { UsersComponent } from '@app/users/users.component';
import { UserLoginComponent } from '@app/users/user-login/user-login.component';
import { UserRegisterComponent } from '@app/users/user-register/user-register.component';

import { JwtInterceptorHelper } from '@app/_helpers/jwt-interceptor.helper';
import { ErrorInterceptorHelper } from '@app/_helpers/error-interceptor.helper';
import { HeaderComponent } from '@app/_shared/header/header.component';
import { FooterComponent } from '@app/_shared/footer/footer.component';
import { Error404Component } from '@app/_shared/error404/error404.component';

import { HeaderHideService } from '@app/_services/header-hide.service';
import { HeaderShowService } from '@app/_services/header-show.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleListComponent,
    ArticleDetailComponent,
	  ArticleCreateComponent,
    UsersComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
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
    HeaderHideService,
    HeaderShowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
