import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email = "";
  senha = "";

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  submit(){
    this.auth.login(this.email, this.senha).subscribe(data => {
      const{token, tipo} = data;
      localStorage.setItem('login', `${tipo} ${token}`)}, error => {
        console.log(error)
      })
  }
}
