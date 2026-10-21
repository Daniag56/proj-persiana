import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css'
})
export class PersianaComponent {
  tieneCorriente: boolean = false;
  CambioEstado: string ="";
  estado: string = "";
}
