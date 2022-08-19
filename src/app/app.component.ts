import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, map, Observable, of, scan, Subscription } from 'rxjs';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'AngularProyectoFinal';

  profesores: any = [];
  cursos: any = [];
  cursoSuscription: Subscription;
  cursos$: Observable<any>;
  constructor(private rxjsService: RxjsService) {
    /* this.rxjsService
      .obtenerPromiseProfesores()
      .then((profesores) => {
        console.log('Estoy desde el promise de Profesores', profesores);
        this.profesores = profesores;
      })
      .catch((error) => {
        console.log(error);
      }); */
    this.rxjsService.obtenerObservableProfesores().subscribe((profesores) => {
      console.log('Estoy desde observable profresores', profesores);
      this.profesores = profesores;
    });

    this.cursoSuscription = this.rxjsService
      .obtenerObservableOCursos()
      .subscribe((cursos) => {
        this.cursos = cursos;
      });

    this.cursos$ = this.rxjsService.obtenerObservableOCursos();
  }

  ngOnInit(): void {
    this.rxjsService.obtenerObservableAlumnos().pipe(
      map((alumnos: any[]) => alumnos.filter((alumno) => alumno.curso === 'Angular'))
    ).subscribe((alumnos) => {
        console.log('Desde suscribe alumnos', alumnos);
      });
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(scan((acumulador: number, valor: number) => acumulador + valor))
      .subscribe((data) => {
        console.log('Probando Operadores', data);
      });
    of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }

  ngOnDestroy(): void {
    console.log('Ejecutando ngOnDestroy');
    this.cursoSuscription.unsubscribe();
  }
  agregarNuevoProfesor() {
    let curso = {
      id: 1,
      nombre: 'UI/UX',
      comision: '32450',
    };
    this.rxjsService.agregarNuevocurso(curso);
  }
}
