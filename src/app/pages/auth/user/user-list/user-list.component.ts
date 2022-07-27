import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { UserModel } from '@models/auth';
import { ColumnModel, PaginatorModel } from '@models/core';
import { UsersHttpService } from '@services/auth';
import { BreadcrumbService, CoreService, MessageService } from '@services/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserListComponent implements OnInit {
  columns: ColumnModel[];
  loaded$ = this.coreService.loaded$;
  pagination$ = this.usersHttpService.pagination$;
  paginator: PaginatorModel = this.coreService.paginator;
  search: UntypedFormControl = new UntypedFormControl('');
  selectedUsers: UserModel[] = [];
  users: UserModel[] = [];

  constructor(
    private coreService: CoreService,
    private breadcrumbService: BreadcrumbService,
    public messageService: MessageService,
    private router: Router,
    private usersHttpService: UsersHttpService
  ) {
    this.breadcrumbService.setItems([{ label: 'Users' }]);
    this.columns = this.getColumns();
    this.pagination$.subscribe((pagination) => (this.paginator = pagination));
    this.search.valueChanges
      .pipe(debounceTime(500))
      .subscribe((_) => this.findAll());
  }

  ngOnInit() {
    this.findAll();
  }

  findAll(page: number = 0) {
    this.usersHttpService
      .findAll(page, this.search.value)
      .subscribe((users) => (this.users = users));
  }

  getColumns(): ColumnModel[] {
    return [
      { field: 'username', header: 'Username' },
      { field: 'name', header: 'Name' },
      { field: 'lastname', header: 'Lastname' },
      { field: 'email', header: 'Email' },
    ];
  }

  paginate(event: any) {
    this.findAll(event.page);
  }

  redirectCreateForm() {
    this.router.navigate(['/administration/users', 'new']);
  }

  redirectEditForm(id: number) {
    this.router.navigate(['/administration/users', id]);
  }

  remove(id: number) {
    this.messageService.questionDelete().then((result) => {
      if (result.isConfirmed) {
        this.usersHttpService.remove(id).subscribe((user) => {
          this.users = this.users.filter((item) => item.id !== user.id);
          this.paginator.totalItems--;
        });
      }
    });
  }

  removeAll() {
    this.messageService.questionDelete().then((result) => {
      if (result.isConfirmed) {
        this.usersHttpService
          .removeAll(this.selectedUsers)
          .subscribe((users) => {
            this.selectedUsers.forEach((userDeleted) => {
              this.users = this.users.filter(
                (user) => user.id !== userDeleted.id
              );
              this.paginator.totalItems--;
            });
            this.selectedUsers = [];
          });
      }
    });
  }
}
