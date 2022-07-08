import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieTicketManagement';
  data: any
  constructor(public router: Router) {
  }
  handleResults(response: any){
    console.log(response)
    this.data = response
  }
}
