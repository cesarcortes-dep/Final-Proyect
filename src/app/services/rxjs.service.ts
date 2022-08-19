import { Injectable } from '@angular/core';
import { from, Observable, observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  alumnos: any = [
    {
      id: 1,
      nombre: 'roman',
      curso: 'angular',
    },
    {
      id: 2,
      nombre: 'Daniel',
      curso: 'Angular',
    },
    {
      id: 3,
      nombre: 'Bran',
      curso: 'Angular',
    },
    {
      id: 4,
      nombre: 'Jose',
      curso: 'java',
    },
    {
      id: 5,
      nombre: 'Laura',
      curso: 'vuejs',
    },
  ];
  profesores: any[] = [
    {
      id: 1,
      nombre: 'Abner',
      curso: 'Angular',
    },
    {
      id: 2,
      nombre: 'Jose',
      curso: 'Angular',
    },
    {
      id: 3,
      nombre: 'Daniel',
      curso: 'Angular',
    },
  ];
  cursos: any[] = [];
  cursosSubject: Subject<any>;
  profesoresObservables: Observable<any>;

  constructor() {
    this.cursosSubject = new Subject();

    this.profesoresObservables = new Observable<any>((suscriptor) => {
      suscriptor.next(this.profesores);
      setTimeout(() => {
        this.profesores.push({ id: 4, nombre: 'Roman', curso: 'Algo' });
        suscriptor.next(this.profesores);
      }, 3000);
    });
  }

  obtenerPromiseProfesores() {
    return new Promise((resolve, reject) => {
      if (this.profesores.length > 0) {
        resolve(this.profesores);
      } else {
        reject({
          codigo: 0,
          mensaje: 'No hay ningun dato de profesores',
        });
      }
    });
  }

  obtenerObservableProfesores() {
    return this.profesoresObservables;
  }

  obtenerObservableOCursos() {
    return this.cursosSubject.asObservable();
  }

  agregarNuevoProfesor(profesor: any) {
    /*  this.profesores.push(profesor); */
  }

  agregarNuevocurso(curso: any) {
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
    console.log(this.cursos);
  }

  obtenerObservableAlumnos() {
    return of(this.alumnos);
  }
}
