import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authority } from '../../authority/authority';
import { AuthorityService } from '../../authority/authority.service';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category.form.component.html'
})
export class CategoryFormComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private authorityService: AuthorityService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  currentEntity: Category =
  {
    categoryId: 0,
    name: "",
    descripcion: "",
    created: new Date(),
    enabled: true,
    archived: true,
    cityId: 0,
    authorities: []
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
          archived: true,
          cityId: 0,
          authorities: []
        };
        this.router.navigate(['/layout/category-list']);
      }
    )
  }

  findById(id: number):void {
    this.categoryService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.authorities.forEach(
          (auth) => {
            this.authorityService.findById(auth.id).subscribe(
              (item) => auth.name = item.name
            )
          }
        )
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

  removeAuthority(id: number):void {

    this.currentEntity.authorities =
    this.currentEntity.authorities.filter(
      (item) => item.id != id
    );
  }

}
