import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IFilm} from "../models/films";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseUrl = environment.baseUrl;
  url = this.baseUrl + 'films'
  constructor(private http: HttpClient) {
  }
//To get all Movie Lists
  getFilms(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this.url).pipe(
      map((data: any) => {
        console.log(data)
        return data.results
      }))
  }
// To get Movie with {id}
  getFilmDetails(id: string): Observable<IFilm> {
    return this.http.get<IFilm[]>(`${this.url}/${id}`).pipe(
      map((data: any) => {
        return data
      })
    )
  }
//To get searched movie
  getSearchFilms(params: any){
    return this.http.get<any>(`${this.url}/?${params.toString()}`).pipe(
      map((data: any) => {
        return data.results
      })
    )
  }
}
