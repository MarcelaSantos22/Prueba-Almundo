import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hoteles-list',
  templateUrl: './hoteles-list.component.html',
  styleUrls: ['./hoteles-list.component.scss']
})
export class HotelesListComponent {
  @Input() hotel: any;
  public moneda: String;
  public etiqueta: String;
  public boton: String;

  constructor() {
    this.moneda = 'ARS';
    this.etiqueta = 'Precio por noche por habitacion';
    this.boton = 'Ver hotel';
  }

  getStarts(numero) {
    const array = [];
    for (let i = 0; i < numero; i++) {
      array.push('./assets/icons/filters/star.svg');
    }
    return array;
  }
}
