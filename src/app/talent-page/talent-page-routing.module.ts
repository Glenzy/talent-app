import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalentPageComponent } from './talent-page.component';

const routes: Routes = [
  { path:'users',component:TalentPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentPageRoutingModule { }