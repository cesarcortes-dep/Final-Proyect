import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

export interface Curso {
  nombreCurso: string;
  nombreEstudiante: string;
  apellidoEstudiante: string;
  nombreProfesor: string;
  comision: string;
  numeroEstudiantes: number;
  matriculaAbierta: boolean;
}

const ELEMENT_DATA: Curso[] = [
  {
    nombreCurso: 'Angular',
    nombreEstudiante: 'Jose',
    apellidoEstudiante: 'Daniel Quintero',
    nombreProfesor: 'Abner Garcia',
    comision: '32310',
    numeroEstudiantes: 45,
    matriculaAbierta: true,
  },
  {
    nombreCurso: 'VueJS',
    nombreEstudiante: 'Rufina',
    apellidoEstudiante: 'Alcalde',
    nombreProfesor: 'Abner Garcia',
    comision: '33320',
    numeroEstudiantes: 69,
    matriculaAbierta: false,
  },
  {
    nombreCurso: 'ReactJS',
    nombreEstudiante: 'Esmeralda',
    apellidoEstudiante: 'Bautista',
    nombreProfesor: 'Abner Garcia',
    comision: '35310',
    numeroEstudiantes: 12,
    matriculaAbierta: true,
  },
  {
    nombreCurso: 'UI/UX',
    nombreEstudiante: 'Braulio',
    apellidoEstudiante: 'Portillo',
    nombreProfesor: 'Abner Garcia',
    comision: '31310',
    numeroEstudiantes: 34,
    matriculaAbierta: false,
  },
  {
    nombreCurso: '.NET',
    nombreEstudiante: 'Thomas ',
    apellidoEstudiante: 'Zamorano',
    nombreProfesor: 'Abner Garcia',
    comision: '38310',
    numeroEstudiantes: 80,
    matriculaAbierta: false,
  },
  {
    nombreCurso: 'SQL',
    nombreEstudiante: 'Olalla',
    apellidoEstudiante: 'Romera',
    nombreProfesor: 'Abner Garcia',
    comision: '31310',
    numeroEstudiantes: 44,
    matriculaAbierta: true,
  },
  {
    nombreCurso: 'Web 3.0',
    nombreEstudiante: 'Saray',
    apellidoEstudiante: 'Encinas',
    nombreProfesor: 'Abner Garcia',
    comision: '32380',
    numeroEstudiantes: 63,
    matriculaAbierta: true,
  },
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  columnas: string[] = [
    'nombreCurso',
    'nombreEstudiante',
    /* 'apellidoEstudiante', */
    'nombreProfesor',
    'comision',
    'numeroEstudiantes',
    'matriculaAbierta',
    'acciones',
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<Curso>;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  eliminar(elemento: Curso) {
    this.dataSource.data = this.dataSource.data.filter(
      (curso: Curso) => curso.comision != elemento.comision
    );
  }

  editar(elemento: Curso) {
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '350px',
      data: elemento,
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        const item = this.dataSource.data.find(
          (curso) => curso.comision == resultado.comision
        );
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    });
  }

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }
}
