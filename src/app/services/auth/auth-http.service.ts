import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '@env/environment';
import {
  LoginModel,
  PasswordChangeModel,
  PasswordResetModel,
  UpdateUserDto,
  UserModel,
} from '@models/auth';
import { LoginResponse, ServerResponse } from '@models/http-response';
import { AuthService } from '@services/auth';
import { CoreService, MessageService } from '@services/core';
// import {AuthRoutesEnum, RoutesEnum} from "@shared/enums";
import { RoutesService } from '@services/core/routes.service';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  API_URL: string = `${environment.API_URL}/auth`;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private coreService: CoreService,
    private router: Router,
    private routesService: RoutesService,
    private messageService: MessageService
  ) {}

  signup(userData: UserModel): Observable<UserModel> {
    const url = `${this.API_URL}/patients/users`;

    // //this.appService.presentLoading();
    return this.httpClient.post<ServerResponse>(url, userData).pipe(
      map((response) => {
        this.messageService.success(response);
        return response.data;
      }),
      tap(() => {
        this.router.navigateByUrl('/login');
      })
    );
  }

  changePassword(
    id: number,
    credentials: PasswordChangeModel
  ): Observable<ServerResponse> {
    const url = `${this.API_URL}/${id}/change-password`;
    this.coreService.showLoad();
    return this.httpClient.put<ServerResponse>(url, credentials).pipe(
      map((response) => {
        this.coreService.hideLoad();
        this.messageService.success(response).then();
        return response.data;
      })
    );
  }

  login(credentials: LoginModel): Observable<ServerResponse> {
    const url = `${this.API_URL}/login`;

    this.coreService.showLoad();
    return this.httpClient.post<ServerResponse>(url, credentials).pipe(
      map((response) => {
        this.coreService.hideLoad();
        this.authService.isLoggedIn = true;
        this.authService.token = response.data.accessToken;
        this.authService.auth = response.data.user;
        this.messageService.success(response).then();
        // this.authService.roles = response.data.roles;
        // this.authService.role = response.data.roles[0];
        // this.authService.permissions = response.data.permissions;
        return response;
      })
    );
  }

  logout(): Observable<ServerResponse> {
    const url = `${this.API_URL}/logout`;

    //this.appService.presentLoading();
    return this.httpClient.get<ServerResponse>(url).pipe(
      map((response) => {
        this.authService.removeLogin();
        return response.data;
      }),
      tap(() => {
        this.routesService.login();
      })
    );
  }

  loginGoogle(): Observable<LoginResponse> {
    // const url = `${this.URL_PUBLIC}/login/google`;
    const url = `${this.API_URL}/login/google`;
    return this.httpClient.get<LoginResponse>(url);
  }

  resetPassword(credentials: PasswordResetModel): Observable<LoginResponse> {
    const url = `${this.API_URL}/reset-password`;
    return this.httpClient.post<LoginResponse>(url, credentials).pipe(
      map((response) => response),
      catchError((error) => {
        this.authService.removeLogin();
        return throwError(error);
      })
    );
  }

  verifyUser(username: string): Observable<ServerResponse> {
    const url = `${this.API_URL}/verify-user/${username}`;
    return this.httpClient.get<ServerResponse>(url).pipe(
      map((response) => response),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  verifyEmail(email: string): Observable<ServerResponse> {
    const url = `${this.API_URL}/verify-email/${email}`;
    return this.httpClient.get<ServerResponse>(url).pipe(
      map((response) => response),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  verifyPhone(phone: string): Observable<ServerResponse> {
    const url = `${this.API_URL}/verify-phone/${phone}`;
    return this.httpClient.get<ServerResponse>(url).pipe(
      map((response) => response),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  requestPasswordReset(username: string): Observable<ServerResponse> {
    const url = `${this.API_URL}/request-password-reset`;
    return this.httpClient.post<ServerResponse>(url, { username }).pipe(
      map((response) => {
        this.messageService.success(response);
        return response.data;
      })
    );
  }

  getRoles(): Observable<ServerResponse> {
    const url = `${this.API_URL}/roles/catalogue`;
    return this.httpClient
      .get<ServerResponse>(url)
      .pipe(map((response) => response));
  }

  getProfile(): Observable<UserModel> {
    console.log('asd');
    const url = `${this.API_URL}/profile`;

    this.coreService.showLoad();
    return this.httpClient.get<ServerResponse>(url).pipe(
      map((response) => {
        this.coreService.hideLoad();
        return response.data;
      })
    );
  }

  getUserInformation(): Observable<UserModel> {
    const url = `${this.API_URL}/user-information`;

    this.coreService.showLoad();
    return this.httpClient.get<ServerResponse>(url).pipe(
      map((response) => {
        this.coreService.hideLoad();
        return response.data;
      })
    );
  }

  updateProfile(payload: UpdateUserDto): Observable<UserModel> {
    const url = `${this.API_URL}/profile`;

    this.coreService.showLoad();
    return this.httpClient.put<ServerResponse>(url, payload).pipe(
      map((response) => {
        this.coreService.hideLoad();
        this.messageService.success(response).then();
        return response.data;
      })
    );
  }

  updateUserInformation(payload: UpdateUserDto): Observable<UserModel> {
    const url = `${this.API_URL}/user-information`;

    this.coreService.showLoad();
    return this.httpClient.put<ServerResponse>(url, payload).pipe(
      map((response) => {
        this.coreService.hideLoad();
        this.messageService.success(response).then();
        return response.data;
      })
    );
  }
}
