import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = { login: '', senha: '' };

  constructor() { }

  ngOnInit(): void {
  }
  public login() {
    if (this.usuario.login != 'dwu@dwu.com.br' || this.usuario.senha != 'DWU@2020') {
      window.alert("Usuário ou Senha Errados!");
    } else { window.location.href = "/cadastro"; }
  }
}