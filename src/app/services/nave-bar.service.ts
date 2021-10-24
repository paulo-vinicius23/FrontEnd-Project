import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NaveBarService {

  eventoFilme: EventEmitter<string> = new EventEmitter();
  eventoCategoria: EventEmitter<number> = new EventEmitter();
  eventContrastMode: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  filtraFilme(filtro: string) {
    this.eventoFilme.emit(filtro);
  }

  filtraCategoria(filtro: number) {
    this.eventoCategoria.emit(filtro);
  }

  contrastChange(cont: boolean) {
    this.eventContrastMode.emit(cont)
  }
}
