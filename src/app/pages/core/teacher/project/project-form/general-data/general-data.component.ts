import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.scss'],
})
export class GeneralDataComponent implements OnInit {
  selectedValue: string = '';
  modalidades: any[];
  careers: { name: string }[];

  constructor() {
    this.modalidades = [
      {
        key: 1,
        name: 'dual',
      },
      {
        key: 1,
        name: 'presencial',
      },
    ];
    this.careers = [
      {
        name: 'desarrollo de software',
      },
      {
        name: 'control de incendios',
      },
      {
        name: 'gia nacional de turismo',
      },
      {
        name: 'gastronomía',
      },
      {
        name: 'diseño de modas',
      },
      {
        name: 'marketing',
      },
    ];
  }

  ngOnInit(): void {}
}
