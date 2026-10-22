import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css',
})
export class PersianaComponent {
  id = input<number>(1);
  corrienteHab = input<boolean>(false);
  corrienteGeneral = input<boolean>(false);
  estado = output<boolean>();
  abierta = false;


  get puedeMoverse() : boolean{
    return this.corrienteGeneral() && this.corrienteHab();
  }

  onCambiarestado(): void {
    if (!this.puedeMoverse)  return;
    this.abierta = !this.abierta
    this.estado.emit(this.abierta)
    }
  }

