import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentPageComponent } from './talent-page.component';
import { TalentPageRoutingModule } from './talent-page-routing.module';


@NgModule({
  declarations: [
    TalentPageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[TalentPageComponent]
})
export class TalentPageModule { }
