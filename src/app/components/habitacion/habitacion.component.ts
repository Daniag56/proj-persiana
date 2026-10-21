import { Component, input } from '@angular/core';


@Component({
  selector: 'app-habitacion',
  imports: [],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
  id = input<number>(1);
  corrienteGeneral = input<boolean>(false);
  corrienteHab = input<boolean>(false);

  get hayCorriente(): boolean {
    return this.corrienteGeneral() && this.corrienteHab();
  }
}
