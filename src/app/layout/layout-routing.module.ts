import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityFormComponent } from '../feature/activity/form/activity.form.component';
import { ActivityListComponent } from '../feature/activity/list/activity-list.component';
import { CategoryFormComponent } from '../feature/category/form/category.form.component';
import { CategoryListComponent } from '../feature/category/list/category-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'category-form', component:CategoryFormComponent},
      {path: 'category-form/:id', component:CategoryFormComponent},
      {path: 'category-list', component:CategoryListComponent},
      {path: 'activity-form', component:ActivityFormComponent},
      {path: 'activity-list', component:ActivityListComponent},
      {path: 'activity-form/:id', component:ActivityFormComponent},

      {path: 'dashboard', component:DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
