import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-habitacion',
  imports: [],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
  corrienteHabitacion = input<false>

  onConectarDesconectarHab(event:Event){
    let conDesbutton = event.target as HTMLButtonElement

    conDesbutton
  }
}
