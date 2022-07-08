import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";
import {IFilm} from "../../models/films";
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  message: IFilm[] = [];
  searchText ='';
  getSearchText = '';
  searchData: any;
  emitterResponse: any;

  @Output() public filmDetails = new EventEmitter<any>();
  constructor(private data: DataServiceService,private router:Router) {
  }

  ngOnInit(): void {
    this.data.getFilms().subscribe((message) => {
      this.message = message
    });
  }
  navigate(film: any) {
    const link = film.url.substring(film.url.length - 2)
    this.data.getFilmDetails(link[0]).subscribe((response) =>{
      this.emitterResponse = response;
      this.router.navigate(['/filmDetails'])
      this.filmDetails.emit(this.emitterResponse)
    })
  };

  search(val: any){
    let params = new HttpParams().set('search',val)
    this.data.getSearchFilms(params).subscribe((searchData) =>{
      console.log('Data from API Search', searchData)
      this.searchData = searchData
    });
  }
}

