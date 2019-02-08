import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { IPerson } from '../shared/interfaces';

@Component({
  selector: 'app-talent-page',
  templateUrl: './talent-page.component.html',
  styleUrls: ['./talent-page.component.scss']
})
export class TalentPageComponent implements OnInit {

  title:string;
  people: any [];

  constructor(private dataServices:DataService){}

  ngOnInit(){
      this.title = "Our Talented People";
      this.dataServices.getUsers().subscribe((users: any) => {
        this.people = users.results;
         console.log(this.people);
            }
         );      
  }

}

