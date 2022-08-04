import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { CategoryFormComponent } from './category/form/category.form.component';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from './category/list/category-list.component';
import { CategoryToolbarComponent } from './category/toolbar/category-toolbar.component';
import { AuthoritySearchComponent } from './authority/authority-search/authority-search.component';
import { ActivityFormComponent } from './activity/form/activity.form.component';
import { ActivityListComponent } from './activity/list/activity-list.component';
import { ActivityToolbarComponent } from './activity/toolbar/activity-toolbar.component';


@NgModule({
  declarations: [
    CategoryFormComponent,
    CategoryListComponent,
    CategoryToolbarComponent,
    ActivityFormComponent,
    AuthoritySearchComponent,
    ActivityListComponent,
    ActivityToolbarComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
