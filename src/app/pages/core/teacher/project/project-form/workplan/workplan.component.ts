import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workplan',
  templateUrl: './workplan.component.html',
  styleUrls: ['./workplan.component.scss'],
})
export class WorkplanComponent implements OnInit {
  description: string;
  objective: string;
  situation: string;
  justification: string;
  products: any[];
  products1: any[];
  cols1: any[];
  cols: any[];

  constructor() {
    this.description =
      'Dado a la ardua labor que realiza la Fundación Alas de Colibrí que busca el ejercicio efectivo de los Derechos Humanos a través de la atención integral a personas en situaciones de riesgo: Mujeres adolescentes sobrevivientes del delito de trata de personas. Niños, niñas y adolescentes en situación de vulnerabilidad. Personas en riesgo de sufrir Violencia Basada en Género en el contexto de movilidad humana.  Todo bajo un enfoque de Derechos Humanos .';
    this.objective =
      'Diseñar una plataforma web con información de la iglesia Ejército de Salvación Cuerpo Quito Sur para poder publicar a esta, dentro del entorno digital y de esta manera poder informar a la sociedad en general sobre la existencia y servicios que proporciona la iglesia a la comunidad ecuatoriana';

    this.situation =
      'La Fundación “Alas de colibrí” a la largo de todo este tiempo desde su creación ha venido en la promoción y defensa de los derechos humanos, así como en la restitución de los mismos a través de programas y proyectos transverzalizados con enfoques de género, movilidad humana, intergeneracionalidad, de discapacidades y étnico – cultural, gracias al apoyo y la confianza de instituciones estatales e internacional. En la actualidad la organización cuenta con presencia en Pichincha, Carchi, Sucumbíos e Imbabura y la oficina matriz se encuentra en Quito.';

    this.justification =
      'La Fundación Alas de colibrí es una organización social sin fines de lucro unidos con un solo fin, ayudar a los demás, y dedicada a impulsar y promover programas especializados para la restitución de los derechos vulnerados de las personas, con énfasis en la problemática de trata de seres humanos, programas de atención psicológica, capacitación y servicio social. Entendiendo la situación actual de la Fundación y la gran necesidad existente, se pide el apoyo de los estudiantes de la carrera de Desarrollo de Software, para la implementación de un sistema web que brinde la oportunidad de acceder a los servicios y productos que ofrece la misma, a personas quiénes sufren violencia basada en género y movilidad humana.';

    this.cols = [
      { field: 'num', header: 'Num' },
      { field: 'narrativesummary', header: 'Narrative Summary' },
      { field: 'IndicatorsVerifiable', header: 'Indicators-Verifiable' },
      { field: 'Means of Verification', header: 'Means of Verification' },
      { field: 'Configuration', header: 'Configuration' },
    ];
    this.products = [{ num: 12 }];
    //this.products = [{ narrativesummary: 'Resumen Narratuv' }];
    //this.products = [{ IndicatorsVerifiable: "hola" }];
    //this.products = [{ MeansofVerification: "hola" }];
    //this.products = [{ Configuration: "hola" }];

      this.cols1 = [
      { field: 'num', header: 'Num' },
      { field: 'name', header: 'Name' },
      { field: 'obj', header: 'Objectives' },
      { field: 'Configuration', header: 'Configuration' },
    ];
    this.products1 = [{ nar: 12 }];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  }

 


