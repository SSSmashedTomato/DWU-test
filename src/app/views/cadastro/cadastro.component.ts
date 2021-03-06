import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastro = {
    Nome: '',
    Telefone: '',
    Nascimento: '',
    Horario: '',
    Observacao: ''
  };

  constructor() { }

  ngOnInit(): void {
  }
  public cadastrar() {
    console.log(this.cadastro);
  }

}
