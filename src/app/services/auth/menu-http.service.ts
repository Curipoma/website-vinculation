import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { RoleModel } from '@models/auth';
import { ServerResponse } from '@models/http-response';

@Injectable({
  providedIn: 'root',
})
export class MenuHttpService {
  API_URL = `${environment.API_URL}/menus`;

  constructor(private httpClient: HttpClient) {}

  getMenusByRole(role: RoleModel): Observable<ServerResponse> {
    const url = `${this.API_URL}/catalogue/${role.id}`;
    return this.httpClient
      .get<ServerResponse>(url)
      .pipe(map((response) => response));
  }
}
