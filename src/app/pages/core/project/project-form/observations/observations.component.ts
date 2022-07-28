import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.scss'],
})
export class ObservationsComponent implements OnInit {
  selectedState: string = '';
  states: any[];

  constructor() {
    this.states = [
      {
        name: 'pendiente',
      },
      {
        name: 'aprobado',
      },
      {
        name: 'corregido',
      },
      {
        name: 'rechazado',
      },
      {
        name: 'enviado a senecyt',
      },
      {
        name: 'por enviar a al senecyt',
      },
      {
        name: 'en proceso',
      },
      {
        name: 'terminado',
      },
    ];
  }

  ngOnInit(): void {}
}
