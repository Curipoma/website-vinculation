import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AuthHttpService, AuthService } from '@services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  display = false;
  items: MenuItem[] = [];
  showedMenu: boolean = false;
  closed: boolean = true;
  closedLock: boolean | null = null;

  constructor(
    private authHttpService: AuthHttpService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMenus();
  }

  showSubMenu(id: number = 0) {
    this.showedMenu = !this.showedMenu;
    if (id > 0) {
      document.getElementById(id?.toString())!.className = this.showedMenu
        ? 'showMenu'
        : '';
    }
  }

  getMenus() {
    this.items = [
      {
        label: 'Categories',
        icon: PrimeIcons.LIST,
        items: [
          {
            label: 'Category1',
            icon: PrimeIcons.BOX,
            routerLink: ['/categories'],
          },
          {
            label: 'Category2',
            icon: PrimeIcons.ANGLE_DOUBLE_RIGHT,
            routerLink: ['/categories'],
          },
        ],
      },
      {
        label: 'Users',
        icon: PrimeIcons.USERS,
        routerLink: ['/administration/users'],
      },
      {
        label: 'Profile',
        icon: PrimeIcons.ID_CARD,
        routerLink: ['/administration/users/profile'],
      },
      {
        label: 'Login',
        icon: PrimeIcons.SIGN_IN,
        routerLink: ['/auth/login'],
      },
    ];
  }

  showCloseMenu() {
    if (!this.closedLock) {
      this.closed = !this.closed;
    }
  }

  closeMenu() {
    if (!this.closedLock) {
      this.closed = true;
    }
  }

  logout() {
    this.authHttpService.logout().subscribe();
  }

  redirectProfile() {
    this.router.navigateByUrl('/administration/users/profile');
  }
}
