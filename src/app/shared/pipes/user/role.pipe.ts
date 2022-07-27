import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role',
})
export class RolePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'admin':
        return 'Administrador';
      case 'support':
        return 'Especialista';
      case 'viewer':
        return 'Revisor';
    }
    return 'Sin Rol';
  }
}
