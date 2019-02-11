import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentPageComponent } from './talent-page.component';
import { ModalComponent } from '../modal/modal.component';


@NgModule({
  declarations: [
    TalentPageComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [TalentPageComponent]
})
export class TalentPageModule { }
