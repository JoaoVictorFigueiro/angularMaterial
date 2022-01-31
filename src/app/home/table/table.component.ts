import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  numero: number;
  idade: number;
  situacao: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {numero: 1, nome: 'Allan', idade: 23, situacao: 'Ativo'},
  {numero: 2, nome: 'Marcelo', idade: 41, situacao: 'Ativo '},
  {numero: 3, nome: 'Bruna', idade: 68, situacao: 'Inativo'},
  {numero: 4, nome: 'Mariana', idade: 29, situacao: 'Cancelado'},
  {numero: 5, nome: 'Henrique', idade: 15, situacao: 'Ativo'},
  {numero: 6, nome: 'Felipe', idade: 17, situacao: 'Suspenso'},
  {numero: 7, nome: 'Suelen', idade: 17, situacao: 'Inativo'},
  {numero: 8, nome: 'Alex', idade: 19, situacao: 'Ativo'},
  {numero: 9, nome: 'Fernanda', idade: 18, situacao: 'Ativo'},
  {numero: 10,nome: 'Carlos', idade: 27, situacao: 'Inativo'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'nome', 'idade', 'situacao'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

