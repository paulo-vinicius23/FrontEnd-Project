import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../move/models/categoria.model';
import { CategoriaService } from '../services/categoria.service';
import { NaveBarService } from '../services/nave-bar.service';

@Component({
  selector: 'app-nave-bar',
  templateUrl: './nave-bar.component.html',
  styleUrls: ['./nave-bar.component.css']
})
export class NaveBarComponent implements OnInit {

  categorias: CategoriaModel[] = [];

  filtro: string = "";
  contrast: boolean = false;

  constructor(private navServ: NaveBarService,
              private catServ: CategoriaService) { }

  ngOnInit(): void {
    this.catServ.getAllCategorias().subscribe( data => {
      this.categorias = data;
    })
  }

  changeContrast() {
    this.contrast = !this.contrast
    this.navServ.contrastChange(this.contrast);
  }

  SelectCategoria(id: any) {
    console.log(id);
    this.navServ.filtraCategoria(id);
  }

  pesquisarFilme() {
    console.log(this.filtro);
    this.navServ.filtraFilme(this.filtro);
  }
}