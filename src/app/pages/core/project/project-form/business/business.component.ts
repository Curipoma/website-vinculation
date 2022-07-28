import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {
  naturalezas: any[];
  selectedValue: string = '';
  provincias: { id: number; name: string }[];

  constructor() {
    this.naturalezas = [
      {
        key: 1,
        name: 'pública',
      },
      {
        key: 1,
        name: 'privada',
      },
      {
        key: 1,
        name: 'mixta',
      },
    ];
    this.provincias = [
      { id: 1, name: 'Azuay' },
      { id: 2, name: 'Bolívar' },
      { id: 3, name: 'Cañar' },
      { id: 4, name: 'Carchi' },
      { id: 5, name: 'Chimborazo' },
      { id: 6, name: 'Cotopaxi' },
      { id: 7, name: 'El Oro' },
      { id: 8, name: 'Esmeraldas' },
      { id: 9, name: 'Galápagos' },
      { id: 10, name: 'Guayas' },
      { id: 11, name: 'Imbabura' },
      { id: 12, name: 'Loja' },
      { id: 13, name: 'Los Ríos' },
      { id: 14, name: 'Manabí' },
      { id: 15, name: 'Morona' },
      { id: 16, name: 'Napo' },
      { id: 17, name: 'Orellana' },
      { id: 18, name: 'Pastaza' },
      { id: 19, name: 'Pichincha' },
      { id: 20, name: 'Santa' },
      { id: 21, name: 'Santo' },
      { id: 22, name: 'Sucumbíos' },
      { id: 23, name: 'Tungurahua' },
      { id: 24, name: 'Zamora-Chinchipe;' },
    ];
  }

  ngOnInit(): void {}
}
