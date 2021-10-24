import { Component, Input, OnInit } from '@angular/core';
import { FilmeModel } from '../../models/filme.model';

@Component({
  selector: 'app-move-card',
  templateUrl: './move-card.component.html',
  styleUrls: ['./move-card.component.css']
})
export class MoveCardComponent implements OnInit {

  constructor() { }

  @Input() filme: FilmeModel = {};

  ngOnInit(): void {
  }

}
