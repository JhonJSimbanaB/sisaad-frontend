import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-activity-toolbar',
  templateUrl: './activity-toolbar.component.html'
})
export class ActivityToolbarComponent implements OnInit {

  @Input() entityName: string ="";
  @Output() termEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  public onInput(term: string){
    this.termEmitter.emit(term);
  }

}
