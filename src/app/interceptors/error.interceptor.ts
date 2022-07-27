import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { delay, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CoreService } from '@services/core';
import { MessageService } from '@services/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private coreService: CoreService,
    private messageService: MessageService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      delay(1000),
      catchError((error) => {
        this.coreService.hideLoad();
        this.messageService.error(error.error);
        return throwError(error);
      })
    );
  }
}
