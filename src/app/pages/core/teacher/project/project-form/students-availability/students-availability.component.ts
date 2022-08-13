import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
// import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-students-availability',
  templateUrl: './students-availability.component.html',
  styleUrls: ['./students-availability.component.scss'],
})
export class StudentsAvailabilityComponent implements OnInit {
  students: any[];
  
  constructor() { 
    this.students = [
      {
        id: 1,
        name: 'Maria Liz',
        cedula: '1234567890',
        grade: '5to Semestre',
        modality: 'Vespertino',
        career: 'Desarrollo de Software',
        state: 'Disponible',
      },

      {
        id: 2,
        name: 'Luz Perez',
        cedula: '125064796',
        grade: '5to Semestre',
        modality: 'Matutino',
        career: 'Desarrollo de Software',
        state: 'Asignado',
      },

      {
        id: 3,
        name: 'Eduardo Torres',
        cedula: '1250489763',
        grade: 'Egresado',
        modality: 'Vespertino',
        career: 'Desarrollo de Software',
        state: 'Disponible',
      },

      {
        id: 4,
        name: 'Arelis Mora',
        cedula: '1269874321',
        grade: 'Egresado',
        modality: 'Matutino',
        career: 'Desarrollo de Software',
        state: 'Disponible',
      },

      {
        id: 5,
        name: 'Alez Santillan',
        cedula: '1248976543',
        grade: '5to Semestre',
        modality: 'Vespertino',
        career: 'Desarrollo de Software',
        state: 'Disponible',
      },

      {
        id: 6,
        name: 'Pablo Lopez',
        cedula: '1247896541',
        grade: 'Egresado',
        modality: 'Vespertino',
        career: 'Desarrollo de Software',
        state: 'Disponible',
      },
    ];
  }

  showModal(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  ngOnInit(): void {
  }

}
