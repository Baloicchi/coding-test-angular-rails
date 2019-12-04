import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router} from '@angular/router';

import { AuthenticationService } from '@app/_services/authentication.service';

@Injectable()
export class ErrorInterceptorHelper implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // logout if 401
                this.authenticationService.logout();
            } else if (err.status === 404) {
                // page not found
                this.router.navigate(['404']);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}