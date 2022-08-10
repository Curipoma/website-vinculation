import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CareerModel } from '@models/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: any[];
  careers: CareerModel[];
  states: any[];
  selectedStates: any = {};

  constructor(private router: Router) {
    this.projects = [
      {
        id: 1,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 2,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 3,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 4,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 5,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 6,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 7,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 8,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 9,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 10,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 11,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 12,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 13,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 14,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 15,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 16,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 17,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 18,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 19,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 20,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 21,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 22,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 23,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 24,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 25,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 26,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 27,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 28,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 29,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 30,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 31,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 32,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 33,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 34,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 35,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 36,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 37,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 38,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 39,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
      },
      {
        id: 40,
        name: 'project',
        career: { name: 'software development' },
        state: { value: 'pending' },
        requests: { value: 'pending' },
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

  edit(id: number) {
    this.router.navigate(['/core/teacher/projects/', id]);
  }
  remove(id: number) {
    this.projects = this.projects.filter((project) => project.id != id);
  }
}
