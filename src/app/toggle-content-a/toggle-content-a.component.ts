import { Component, Input,  OnInit } from '@angular/core';
import { DatasModel } from '../app.component';

@Component({
  selector: 'app-toggle-content-a',
  templateUrl: './toggle-content-a.component.html',
  styleUrls: ['./toggle-content-a.component.css']
})
export class ToggleContentAComponent implements OnInit {

  @Input() datas: Omit<DatasModel, "picture">;

  constructor() { }

  ngOnInit() { 
  }

}