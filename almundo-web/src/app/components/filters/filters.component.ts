import { Component, Output, EventEmitter } from '@angular/core';
import { isNumber } from 'util';
import { HotelesService } from '../../services/hoteles.service';
import { Config } from '../../models/config';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [HotelesService]

})

export class FiltersComponent  {
  public filtroExtrella = false;
  public filtros: String;
  public nombreHotel: String;
  public estrellaLabel: String;
  public aceptar: String;
  public all: String;
  public iconoStar: String;
  public iconoSearch: String;
  public estrellas: any;
  public hoteles: any;


  constructor(private _hotelService: HotelesService) {
  this.iconoStar = Config.ICONO_STAR;
  this.iconoSearch = Config.ICONO_SEARCH;
  this.filtros = 'Filtros';
  this.nombreHotel = 'Nombre del hotel';
  this.estrellaLabel = 'Estrellas';
  this.aceptar = 'Aceptar';
  this.all = 'Todas las estrellas';
  this.estrellas = [
    {
      id: 'e0',
      value: true,
      stars: -1,
      isNumber: false,
    },
    {
      id: 'e1',
      value: false,
      stars: 5,
      isNumber: true
    },
    {
      id: 'e2',
      value: false,
      stars: 4,
      isNumber: true
    },
    {
      id: 'e3',
      value: false,
      stars: 3,
      isNumber: true
    },
    {
      id: 'e4',
      value: false,
      stars: 2,
      isNumber: true
    },
    {
      id: 'e5',
      value: false,
      stars: 1,
      isNumber: true
    }
  ];
}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getHoteles();
  }

  getHoteles() {
    this._hotelService.getHoteles().subscribe(
      result => {
        console.log(result);
        this.hoteles = result;
      },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }

  public getStarts(numero): any {
    if (isNumber(numero)) {
      const array = [];
      for (let i = 0; i < numero; i++) {
        array.push(this.iconoStar);
      }
      return array;
    } else {
      return numero;
    }

  }
}
