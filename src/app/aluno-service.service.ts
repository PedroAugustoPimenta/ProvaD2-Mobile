import { Injectable } from '@angular/core';
import { Aluno } from './alunos/aluno.module'

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  aluno: Aluno = {
    nome: "Pedro Augusto Pimenta ",
    idade: 21,
    RA: 11816900
  }
    ;

  constructor() { }

  async getAluno() {
    return await this.aluno;
  }
}