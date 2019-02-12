import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template:`<app-talent-page></app-talent-page>`
})
export class AppComponent implements OnInit {
  constructor(){

  }
  ngOnInit(){
  }
}
