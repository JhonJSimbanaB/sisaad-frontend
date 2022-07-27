import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './feature/activity/activity.component';

const routes: Routes = [
  {path: 'activity', component:ActivityComponent},
  {path: 'activity/:id', component:ActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
