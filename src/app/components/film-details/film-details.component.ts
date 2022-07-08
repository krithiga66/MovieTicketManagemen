import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IFilm} from "../../models/films";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  response: IFilm | any;
  @Input() public filmDet: any
  constructor(private data: DataServiceService,private route: ActivatedRoute) { }
  ngOnInit(): void {
  }
}
