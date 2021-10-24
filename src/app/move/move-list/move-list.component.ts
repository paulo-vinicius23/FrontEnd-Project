import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';
import { NaveBarService } from 'src/app/services/nave-bar.service';
import { FilmeModel } from '../models/filme.model';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css']
})
export class MoveListComponent implements OnInit {

  constructor(public filme: FilmeService,
              public navServ: NaveBarService) { }

  moveList: FilmeModel[] = [];

  ngOnInit(): void {
    this.allFilmes();
    this.navServ.eventoFilme.subscribe(filtro => {
      console.log(filtro);
      this.filtraFilme(filtro);
    })
    this.navServ.eventoCategoria.subscribe(filtro => {
      console.log(filtro);
      this.filtraCategoria(filtro);
    })
  }

  allFilmes() {
    this.filme.getAllFilmes().subscribe(data =>{
      this.moveList = data;
    }, error =>{
      console.log(error);
    })
  }

  filtraCategoria(filtro: number){
    this.filme.getFilmeByCategoria(filtro).subscribe(data => {
      this.moveList = data;
    })
  }

  filtraFilme(filtro: string) {
    if (filtro == "" || filtro == null){
      this.allFilmes();
    } else {
      this.filme.getFilmeByName(filtro).subscribe(data => {
        this.moveList = data;
      })
    }
  }
}
