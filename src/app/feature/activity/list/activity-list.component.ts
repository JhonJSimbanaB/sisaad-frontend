import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html'
})
export class ActivityListComponent implements OnInit {

  constructor(
    private activityService: ActivityService
  ) {}

  activityList: Activity[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.activityService.findAll().subscribe(
      (response) => this.activityList = response
    )
  }

 public findByName(term: string): void{
    if (term.length>=2){
      this.activityService.findByName(term).subscribe(
        (response)=> this.activityList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }
  }
}
