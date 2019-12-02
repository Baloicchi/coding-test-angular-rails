import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ArticlesComponent } from '@app/articles/articles.component';
import { ArticleListComponent } from '@app/articles/article-list/article-list.component';
import { UsersComponent } from '@app/users/users.component';
import { UserLoginComponent } from '@app/users/user-login/user-login.component';
import { UserRegisterComponent } from '@app/users/user-register/user-register.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleListComponent,
    UsersComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
