import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno.module';
import { AlunosService } from '../aluno-service.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno: Aluno;
  constructor(private alunoService: AlunosService) { }


  async ngOnInit() {
    this.aluno = await this.alunoService.getAluno();
  }
}
