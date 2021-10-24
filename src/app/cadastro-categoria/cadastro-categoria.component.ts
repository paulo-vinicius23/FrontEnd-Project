import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../move/models/categoria.model';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  categoria: CategoriaModel = { 
    categoria: "",
    tag: ""
  }

  constructor(private serv: CategoriaService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.categoria);
    this.serv.salvarCategoria(this.categoria).subscribe(data => {
      console.log(data)
    })
  }

}
