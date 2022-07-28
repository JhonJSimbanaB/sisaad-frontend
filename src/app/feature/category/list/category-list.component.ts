import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {

  constructor(
    private categoryService: CategoryService
  ) { }

  categoryList: Category[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.categoryService.findAll().subscribe(
      (response) => this.categoryList = response
    )
  }

  public findByName(term: string): void{
    if (term.length>=2){
      this.categoryService.findByName(term).subscribe(
        (response) => this.categoryList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }

}
