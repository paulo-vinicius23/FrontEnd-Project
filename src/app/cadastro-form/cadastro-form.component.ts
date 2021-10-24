import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaModel } from '../move/models/categoria.model';
import { FilmeModel } from '../move/models/filme.model';
import { CategoriaService } from '../services/categoria.service';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  constructor(private form: FormBuilder, 
              private servFil: FilmeService,
              private servCat: CategoriaService) {}

  categorias: CategoriaModel[] = [];
  formFilme = new FormGroup({});

  ngOnInit(): void {
    this.createForm();
    this.servCat.getAllCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  createForm(): void {
    this.formFilme = this.form.group({
      filme: [null, [Validators.required]],
      ano: [null, [Validators.required]],
      imagem: [null, [Validators.required]],
      sinopse: [null, [Validators.required]],
      duracao: [null, [Validators.required]],
      diretor: [null, [Validators.required]],
      categoria: [null, [Validators.required]]
    })
  }

  submit(){
    let filme: FilmeModel = this.formFilme.value;
    filme.categoria = {id: parseInt(this.formFilme.value.categoria)};
    console.log(filme)
    this.servFil.salvarFilme(filme).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error)
    })
  }
}