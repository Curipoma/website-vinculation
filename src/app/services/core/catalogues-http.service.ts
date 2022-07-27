import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { CreateUserDto, UpdateUserDto, UserModel } from '@models/auth';
import { map } from 'rxjs/operators';
import { ServerResponse } from '@models/http-response';
import { CoreService, MessageService } from '@services/core';
import { CatalogueModel, PaginatorModel } from '@models/core';
import { CatalogueTypeEnum } from '@shared/enums';

@Injectable({
  providedIn: 'root',
})
export class CataloguesHttpService {
  API_URL = `${environment.API_URL}/catalogues`;
  private pagination = new BehaviorSubject<PaginatorModel>(
    this.coreService.paginator
  );
  public pagination$ = this.pagination.asObservable();

  constructor(
    private httpClient: HttpClient,
    private coreService: CoreService,
    private messageService: MessageService
  ) {}

  create(payload: CreateUserDto): Observable<UserModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<ServerResponse>(url, payload).pipe(
      map((response) => {
        this.messageService.success(response);
        return response.data;
      })
    );
  }

  catalogue(type: CatalogueTypeEnum): Observable<CatalogueModel[]> {
    const url = `${this.API_URL}/catalogue`;
    const params = new HttpParams().append('type', type);
    this.coreService.showLoad();
    return this.httpClient.get<ServerResponse>(url, { params }).pipe(
      map((response) => {
        this.coreService.hideLoad();
        return response.data;
      })
    );
  }

  findAll(page: number = 1, search: string = ''): Observable<CatalogueModel[]> {
    const url = this.API_URL;
    const headers = new HttpHeaders().append('pagination', 'true');
    const params = new HttpParams()
      .append('page', page)
      .append('search', search);
    this.coreService.showLoad();
    return this.httpClient.get<ServerResponse>(url, { headers, params }).pipe(
      map((response) => {
        this.coreService.hideLoad();
        if (response.pagination) {
          this.pagination.next(response.pagination);
        }
        return response.data;
      })
    );
  }

  findOne(id: number): Observable<UserModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient
      .get<ServerResponse>(url)
      .pipe(map((response) => response.data));
  }

  update(id: number, payload: UpdateUserDto): Observable<UserModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ServerResponse>(url, payload).pipe(
      map((response) => {
        this.messageService.success(response);
        return response.data;
      })
    );
  }

  remove(id: number): Observable<boolean> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<ServerResponse>(url).pipe(
      map((response) => {
        this.messageService.success(response);
        return response.data;
      })
    );
  }

  removeAll(id: number[]): Observable<boolean> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<ServerResponse>(url).pipe(
      map((response) => {
        this.messageService.success(response);
        return response.data;
      })
    );
  }
}
