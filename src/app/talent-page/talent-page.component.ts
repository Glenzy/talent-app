import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { IPerson } from '../shared/interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-talent-page',
  templateUrl: './talent-page.component.html',
  styleUrls: ['./talent-page.component.scss']
})
export class TalentPageComponent implements OnInit {

  title: string;
  people: any[];
  peopleContent: any;

  constructor(
    private dataServices: DataService,
    private modalService: NgbModal
  ) { }

  open(content) {
    this.modalService.open(content);
  }
  ngOnInit() {
    this.title = "Our Talented People";
    this.dataServices.getUsers().subscribe((users: any) => {
      this.people = users.results;
      console.log(this.people);
    }
    );
  }

}

