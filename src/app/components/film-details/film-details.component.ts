import {Component, Input, OnInit} from '@angular/core';
import {IFilm} from "../../models/films";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  emitterResponse: IFilm | any;
  @Input() public filmDet: any
  constructor() { }
  ngOnInit(): void {
  }
}
