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
export class FiltersComponent {
  public filtrosLabel: String;
  public nombreHotelLabel: String;
  public estrellaLabel: String;
  public aceptar: String;
  public allStars: String;
  public iconoStar: String;
  public iconoSearch: String;
  public searchName: string;
  public error: string;
  public show: boolean;
  public estrellas: any;
  public hoteles: any;
  public filtroStars: any;

  constructor(private _hotelService: HotelesService) {
    this.iconoStar = Config.ICONO_STAR;
    this.iconoSearch = Config.ICONO_SEARCH;
    this.filtrosLabel = 'Filtros';
    this.nombreHotelLabel = 'Nombre del hotel';
    this.estrellaLabel = 'Estrellas';
    this.aceptar = 'Aceptar';
    this.allStars = 'Todas las estrellas';
    this.searchName = '';
    this.error = '';
    this.show = false;
    this.filtroStars = [];
    this.estrellas = [
      {
        id: 'e0',
        value: true,
        stars: -1
      },
      {
        id: 'e5',
        value: false,
        stars: 5
      },
      {
        id: 'e4',
        value: false,
        stars: 4
      },
      {
        id: 'e3',
        value: false,
        stars: 3
      },
      {
        id: 'e2',
        value: false,
        stars: 2
      },
      {
        id: 'e1',
        value: false,
        stars: 1
      }
    ];
  }

  ngOnInit() {
    this.getHoteles();
  }

  public getHoteles() {
    this._hotelService.getHoteles(this.searchName, this.filtroStars).subscribe(
      result => {
        this.hoteles = result;
      },
      error => {
        this.error = 'No se obtuvieron resultados.';
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

  public getByStars(stars: any, value: boolean) {
    if (value) {
      if (stars !== -1) {
        this.estrellas[0].value = false;
      } else {
        for (let i = 1; i < this.estrellas.length; i++) {
          this.estrellas[i].value = false;
        }
        this.filtroStars = [];
      }
      this.filtroStars.push(stars);
    } else {
      let index = this.filtroStars.indexOf(stars);
      this.filtroStars.splice(index, 1);
    }
    this.getHoteles();
  }

  public toggle() {
    this.show = !this.show;
  }
}
