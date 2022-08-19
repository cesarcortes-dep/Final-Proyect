import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../tabla/tabla.component';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css'],
})
export class EditarDialogComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) {
    this.formulario = fb.group({
      nombreCurso: new FormControl(data.nombreCurso),
      nombreEstudiante: new FormControl(data.nombreEstudiante),
      apellidoEstudiante: new FormControl(data.apellidoEstudiante),
      nombreProfesor: new FormControl(data.nombreProfesor),
      comision: new FormControl(data.comision),
      numeroEstudiantes: new FormControl(data.numeroEstudiantes),
      matriculaAbierta: new FormControl(data.matriculaAbierta),
    });
  }

  ngOnInit(): void {}

  actualizar() {
    this.dialogRef.close(this.formulario.value);
  }

  cerrar() {
    this.dialogRef.close();
  }
}
