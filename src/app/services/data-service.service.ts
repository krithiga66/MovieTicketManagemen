import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {IFilm} from "../models/films";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseUrl = environment.baseUrl;
  url = this.baseUrl + 'films'
  constructor(private http: HttpClient) {
  }

  getFilms(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this.url).pipe(
      map((data: any) => {
        console.log(data)
        return data.results
      }))
  }

  getFilmDetails(id: string): Observable<IFilm> {
    return this.http.get<IFilm[]>(`${this.url}/${id}`).pipe(
      map((data: any) => {
        return data
      })
    )
  }

  getSearchFilms(params: any){
    return this.http.get<any>(`${this.url}/?${params.toString()}`).pipe(
      map((data: any) => {
        return data.results
      })
    )
  }
}
