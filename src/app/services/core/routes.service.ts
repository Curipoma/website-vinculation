import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export enum AppRoutesEnum {
  CORE = '/core',
  AUTH = '/auth',
  COMMON = '/common',
}

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  constructor(private router: Router) {}

  get core(): string {
    return AppRoutesEnum.CORE;
  }

  get common(): string {
    return AppRoutesEnum.COMMON;
  }

  get appRoutes(): string {
    return '';
  }

  login() {
    this.router.navigateByUrl(`${AppRoutesEnum.AUTH}/login`);
  }

  profile() {
    this.router.navigateByUrl(`${AppRoutesEnum.AUTH}/profile`);
  }

  dashboard() {
    this.router.navigateByUrl(`/`);
  }
}
