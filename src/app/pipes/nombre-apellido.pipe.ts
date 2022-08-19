import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreApellido',
})
export class NombreApellidoPipe implements PipeTransform {
 
  transform(value: any): string {
   let resultado = value.nombreEstudiante + ' ' + value.apellidoEstudiante;
  return resultado;
  }
}
