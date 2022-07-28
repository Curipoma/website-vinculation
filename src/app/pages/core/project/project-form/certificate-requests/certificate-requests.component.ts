import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-requests',
  templateUrl: './certificate-requests.component.html',
  styleUrls: ['./certificate-requests.component.scss'],
})
export class CertificateRequestsComponent implements OnInit {
  requests: any[];
  columns: any[];
  states: { name: string }[];
  displayModal: boolean = false;

  constructor() {
    this.requests = [
      {
        id: 1,
        request: 'Alvaro Curipoma',
      },
      {
        id: 2,
        request: '-Alex Bravo',
      },
      {
        id: 3,
        request: 'Paola Acosta',
      },
      {
        id: 4,
        request: 'Juan Benitez',
      },
    ];
    this.columns = [
      { field: 'id', header: 'Num' },
      { field: 'request', header: 'request' },
    ];
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

  showModalDialog() {
    this.displayModal = true;
  }
}
