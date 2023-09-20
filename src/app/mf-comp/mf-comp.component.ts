import { Component } from '@angular/core';

@Component({
  selector: 'app-mf-comp',
  templateUrl: './mf-comp.component.html',
  styleUrls: ['./mf-comp.component.css']
})
export class MfCompComponent {

  private _secretMessage = '?????';
  
  get secretMessage () {
    return this._secretMessage;
  }

  set secretMessage (value: string) {
    this._secretMessage = value;
  }


}
