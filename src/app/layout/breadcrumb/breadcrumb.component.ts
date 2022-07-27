import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService, CoreService } from '@services/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent {
  subscription: Subscription;
  items: MenuItem[] = [];
  home: MenuItem;
  loaded$ = this.coreService.loaded$;

  constructor(
    public breadcrumbService: BreadcrumbService,
    private coreService: CoreService
  ) {
    this.subscription = breadcrumbService.itemsHandler.subscribe((response) => {
      this.items = response as MenuItem[];
    });
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
