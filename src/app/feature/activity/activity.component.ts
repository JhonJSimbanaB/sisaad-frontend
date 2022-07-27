import { Component, OnInit } from '@angular/core';
import { Activity } from './activity';
import { ActivityService } from './activity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html'
})
export class ActivityComponent implements OnInit {

  currentActivity: Activity = {
    activityId: 0,
    name: "",
    category: "",
    created: new Date(),
    updated: new Date(),
    enable: true
  };

  constructor(
    private activityService: ActivityService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let id:string;
         if (params.get("id")){
          id = params.get("id")!;
          console.log("el id es:" + params.get("id"));
          console.log("el id convertido es:" + id);
          this.findById(parseInt(id));
         }
      }
    )
  }

  save():void{
    console.table(this.currentActivity);
    this.activityService.save(this.currentActivity)
    .subscribe(
      (response) => {
        console.log("registro guardar");
        this.currentActivity = {
          activityId: 0,
          name: "",
          category: "",
          created: new Date(),
          updated: new Date(),
          enable: true
        };
      }
    )
  }

  findById(id: number): void {
    this.activityService.findById(id)
    .subscribe(
      (reponse: Activity) => {
        this.currentActivity = reponse;
        console.log("lectura del id"+this.currentActivity.activityId);
      }
    )
  }

  delete():void{
    this.activityService.deleteById(this.currentActivity.activityId)
    .subscribe(
      () => {
        console.log("Registro eliminado");
        this.currentActivity = {
          activityId: 0,
          name: "",
          category: "",
          created: new Date(),
          updated: new Date(),
          enable: true
        };
      }
    )
  }

}

