import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { IResult } from '../shared/interfaces';

@Component({
  selector: 'app-talent-page',
  templateUrl: './talent-page.component.html',
  styleUrls: ['./talent-page.component.scss']
})
export class TalentPageComponent implements OnInit {

  title:string;
  people: IResult [];

  constructor(private dataServices:DataService){}

  ngOnInit(){
      this.title = "Talented People";
      this.dataServices.getUsers().subscribe((users: IResult []) => this.people = users);
      
  }

}

