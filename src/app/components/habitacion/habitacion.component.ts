import { Component, input, output } from '@angular/core';
import { PersianaComponent } from './persiana/persiana.component';

@Component({
  selector: 'app-habitacion',
  imports: [PersianaComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
  id = input<number>(1);
  corrienteGeneral = input<boolean>(false);
  corrienteHab = input<boolean>(false);
  estado = output<boolean>()

  get hayCorriente(): boolean {
    return this.corrienteGeneral() && this.corrienteHab();
  }
}
