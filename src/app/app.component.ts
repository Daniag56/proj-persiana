import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersianaComponent } from './components/habitacion/persiana/persiana.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersianaComponent, HabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //propiedades
  title = 'proj-termostato';
  titulo = 'Control Vivienda';

  corrienteGeneral: boolean = false;
  corrienteHab: boolean = false;
  id = 1;
  onConectarDesconectar(event: Event) {
    let conDesbutton = event.target as HTMLButtonElement;

    this.corrienteGeneral = !this.corrienteGeneral;

    conDesbutton.innerText = this.corrienteGeneral ? 'Desconectar' : 'Conectar';
  }

  onConectarDesconectarHab(event: Event) {
    let conDesbutton = event.target as HTMLButtonElement;

    this.corrienteHab = !this.corrienteHab;

    conDesbutton.innerText = this.corrienteHab ? 'Desconectar-Hab1' : 'Conectar-Hab1';
  }
}
