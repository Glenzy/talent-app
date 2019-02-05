import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
/*  { path:'', pathMatch:'full', redirectTo:'/users' },
  //handle 404's
  { path:'**', pathMatch:'full', redirectTo:'/users' }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
