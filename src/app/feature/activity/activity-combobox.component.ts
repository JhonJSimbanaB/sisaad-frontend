import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from './activity';
import { ActivityService } from './activity.service';

@Component({
  selector: 'app-activity-combobox',
  templateUrl: './activity-combobox.component.html',
})
export class ActivityComboboxComponent implements OnInit {
  constructor(private activityService: ActivityService) {}

  activities: Activity[] = [];
  @Output() activityIdEmitter = new EventEmitter<number>();
  @Input() activityId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.activityService
      .findAll()
      .subscribe((respose) => (this.activities = respose));
  }

  public onSelect(id: string) {
    console.log('Id de Actividad: ' + id);
    this.activityIdEmitter.emit(parseInt(id));
  }
}
