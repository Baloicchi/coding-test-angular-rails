import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from '@app/users/user-login/user-login.component';
import { UserRegisterComponent } from '@app/users/user-register/user-register.component';

import { ArticlesComponent } from '@app/articles/articles.component';
import { ArticleListComponent } from '@app/articles/article-list/article-list.component';
import { ArticleCreateComponent } from '@app/articles/article-create/article-create.component';
import { ArticleDetailComponent } from '@app/articles/article-detail/article-detail.component';
import { Error404Component } from '@app/_shared/error404/error404.component';

import { AuthGuardHelper } from '@app/_helpers/auth-guard.helper';
import { AuthGuardLoginHelper } from '@app/_helpers/auth-guard-login.helper';

const routes: Routes = [
  { path: 'articles/:id', component: ArticleDetailComponent, canActivate: [AuthGuardHelper] },
  { path: '', component: ArticlesComponent, canActivate: [AuthGuardHelper] },
  { path: 'login', component: UserLoginComponent, canActivate: [AuthGuardLoginHelper]},
  { path: 'register', component: UserRegisterComponent, canActivate: [AuthGuardLoginHelper]},
  { path: 'articles', component: ArticleListComponent, canActivate: [AuthGuardHelper] },
  { path: 'create', component: ArticleCreateComponent, canActivate: [AuthGuardHelper] },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
