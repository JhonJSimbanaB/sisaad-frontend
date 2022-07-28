import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from '../feature/activity/activity.component';
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
      {path: 'activity-form', component:ActivityComponent},
      //{path: 'activity-list', component:ActivityListComponent},
      {path: 'activity-form/:id', component:ActivityComponent},

      {path: 'dashboard', component:DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
