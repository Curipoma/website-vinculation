import { Component } from '@angular/core';
import { AnnexeModel, ColumnModel } from '@models/core';
import { CoreService } from '@services/core';

@Component({
  selector: 'app-annexes',
  templateUrl: './annexes.component.html',
  styleUrls: ['./annexes.component.scss'],
})
export class AnnexesComponent {
  businessAnnexes: AnnexeModel[] = [
    {
      id: 1,
      name: 'copia de cedula',
    },
    {
      id: 2,
      name: 'proyecto',
    },
    {
      id: 3,
      name: 'muckups',
    },
    {
      id: 4,
      name: 'doc',
    },
    {
      id: 5,
      name: 'doc',
    },
    {
      id: 6,
      name: 'doc',
    },
    {
      id: 7,
      name: 'doc',
    },
    {
      id: 8,
      name: 'doc',
    },
    {
      id: 9,
      name: 'doc',
    },
    {
      id: 10,
      name: 'doc',
    },
    {
      id: 11,
      name: 'doc',
    },
    {
      id: 12,
      name: 'doc',
    },
    {
      id: 13,
      name: 'doc',
    },
    {
      id: 14,
      name: 'doc',
    },
    {
      id: 15,
      name: 'doc',
    },
    {
      id: 16,
      name: 'doc',
    },
    {
      id: 17,
      name: 'doc',
    },
    {
      id: 18,
      name: 'doc',
    },
    {
      id: 19,
      name: 'doc',
    },
    {
      id: 20,
      name: 'doc',
    },
    {
      id: 21,
      name: 'doc',
    },
    {
      id: 22,
      name: 'doc',
    },
    {
      id: 23,
      name: 'doc',
    },
    {
      id: 24,
      name: 'doc',
    },
    {
      id: 25,
      name: 'doc',
    },
  ];
  institutionalAnnexes: AnnexeModel[] = [
    {
      id: 1,
      name: 'copia de cedula',
    },
    {
      id: 2,
      name: 'proyecto',
    },
    {
      id: 3,
      name: 'muckups',
    },
    {
      id: 4,
      name: 'doc',
    },
    {
      id: 5,
      name: 'doc',
    },
    {
      id: 6,
      name: 'doc',
    },
    {
      id: 7,
      name: 'doc',
    },
    {
      id: 8,
      name: 'doc',
    },
    {
      id: 9,
      name: 'doc',
    },
    {
      id: 10,
      name: 'doc',
    },
    {
      id: 11,
      name: 'doc',
    },
    {
      id: 12,
      name: 'doc',
    },
    {
      id: 13,
      name: 'doc',
    },
    {
      id: 14,
      name: 'doc',
    },
    {
      id: 15,
      name: 'doc',
    },
    {
      id: 16,
      name: 'doc',
    },
    {
      id: 17,
      name: 'doc',
    },
    {
      id: 18,
      name: 'doc',
    },
    {
      id: 19,
      name: 'doc',
    },
    {
      id: 20,
      name: 'doc',
    },
    {
      id: 21,
      name: 'doc',
    },
    {
      id: 22,
      name: 'doc',
    },
    {
      id: 23,
      name: 'doc',
    },
    {
      id: 24,
      name: 'doc',
    },
    {
      id: 25,
      name: 'doc',
    },
  ];
  columns: ColumnModel[] = [
    { field: 'id', header: 'id' },
    { field: 'name', header: 'name' },
  ];
  loaded$ = this.coreService.loaded$;
  selectedBusinessAnnexes: any[] = [];
  selectedInstitutionalAnnexes: any[] = [];

  constructor(private coreService: CoreService) {}

  remove(id: number) {
    this.businessAnnexes = this.businessAnnexes.filter(
      (annexe) => annexe.id != id
    );
  }
}
