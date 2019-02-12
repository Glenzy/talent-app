import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';

import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPhone, faAt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-talent-page',
  templateUrl: './talent-page.component.html',
  styleUrls: ['./talent-page.component.scss']
})
export class TalentPageComponent implements OnInit {

  title: string;
  people: any[];
  activePerson: any;


  constructor(
    private dataServices: DataService,
    private modalService: NgbModal
  ) { }

  open(data) {
    this.activePerson = data;
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.activePerson = this.activePerson;
    modalRef.componentInstance.faPhone = faPhone;
    modalRef.componentInstance.faAt = faAt;
    modalRef.componentInstance.faMapMarkerAlt = faMapMarkerAlt;
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