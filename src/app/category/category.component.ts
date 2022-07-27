import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  constructor(

    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute

  ) { }

  currentEntity: Category =
  {
    categoryId: 0,
    name: "",
    descripcion: "",
    created: new Date(),
    enabled: true,
    archived: true
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.categoryService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          categoryId: 0,
          name: "",
          descripcion: "",
          created: new Date(),
          enabled: true,
          archived: true
        };
      }
    )
  }

  findById(id: number):void {
    this.categoryService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.categoryService.deleteById(this.currentEntity.categoryId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }




}
