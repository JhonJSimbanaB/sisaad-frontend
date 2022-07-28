import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { CategoryFormComponent } from './category/form/category.form.component';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from './category/list/category-list.component';
import { CategoryToolbarComponent } from './category/toolbar/category-toolbar.component';
import { CityComboboxComponent } from './city/city-combobox.component';
import { AuthoritySearchComponent } from './authority/authority-search/authority-search.component';
import { ActivityComponent } from './activity/activity.component';


@NgModule({
  declarations: [
    CategoryFormComponent,
    CategoryListComponent,
    CategoryToolbarComponent,
    CityComboboxComponent,
    ActivityComponent,
    AuthoritySearchComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
