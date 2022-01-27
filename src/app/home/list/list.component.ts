import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  typesOfShoes: string[] = ['João', 'Graciele', 'Miqueias', 'Guilherme', 'Michel'];
  constructor() { }

  ngOnInit(): void {
  }

}
