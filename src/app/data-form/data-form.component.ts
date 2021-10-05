import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioModel } from './usuario.module';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  userList: UsuarioModel[] = [];

  form = this.formBuilder.group({
    nome: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    cpf: [null, [Validators.required]],
    telefone: [null],
    endereco: [null],
    cep: [null]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  resetForm(){
    this.form.reset()
  }

  edit(user: UsuarioModel, id: number){
    this.form.setValue({...user});
    this.userList.splice(id, 1)
  }

  delet(id: number){
    this.userList.splice(id, 1)
  }

  Submit(){
    console.log(this.form.value);
    this.userList.push(this.form.value);
    this.resetForm();
  }
}
