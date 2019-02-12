import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentPageComponent } from './talent-page.component';
import { ModalComponent } from '../modal/modal.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    TalentPageComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [TalentPageComponent],
  entryComponents: [ModalComponent],
})
export class TalentPageModule { }
