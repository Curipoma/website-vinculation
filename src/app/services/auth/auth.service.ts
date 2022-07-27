import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PermissionModel, RoleModel, UserModel } from '@models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private login = new BehaviorSubject<boolean>(this.isLoggedIn);
  public login$ = this.login.asObservable();

  constructor() {}

  changeTheme(theme: string) {
    // const themePath = themes.find(element => element.name == theme)?.path;
    //
    // const element = document.getElementById('theme-css');
    // if (element && themePath) {
    //   element.setAttribute('href', themePath);
    // }
  }

  get isLoggedIn(): boolean {
    return Boolean(localStorage.getItem('isLoggedIn'));
  }

  set isLoggedIn(value: boolean) {
    this.login.next(value);
    localStorage.setItem('isLoggedIn', String(value));
  }

  get token(): string | null {
    return localStorage.getItem('accessToken');
  }

  set token(value: string | undefined | null) {
    localStorage.setItem('accessToken', JSON.stringify(value));
  }

  get auth(): UserModel {
    return JSON.parse(String(localStorage.getItem('auth')));
  }

  set auth(user: UserModel | undefined | null) {
    localStorage.setItem('auth', JSON.stringify(user));
  }

  get permissions(): PermissionModel[] {
    return JSON.parse(String(localStorage.getItem('permissions')));
  }

  set permissions(permissions: PermissionModel[] | undefined | null) {
    localStorage.setItem('permissions', JSON.stringify(permissions));
  }

  get role(): RoleModel {
    return JSON.parse(String(localStorage.getItem('role')));
  }

  set role(role: RoleModel | undefined | null) {
    localStorage.setItem('role', JSON.stringify(role));
  }

  get roles(): RoleModel[] {
    return JSON.parse(String(localStorage.getItem('roles')));
  }

  set roles(roles: RoleModel[] | undefined | null) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  get keepSession(): boolean | null {
    return JSON.parse(String(localStorage.getItem('keepSession')));
  }

  set keepSession(value: boolean | undefined | null) {
    localStorage.setItem('keepSession', JSON.stringify(value));
  }

  removeLogin() {
    localStorage.clear();
    this.login.next(false);
  }
}
