import { Component, Input,  OnInit } from '@angular/core';
import { DatasModel } from '../app.component';

@Component({
  selector: 'app-toggle-content-b',
  templateUrl: './toggle-content-b.component.html',
  styleUrls: ['./toggle-content-b.component.css']
})
export class ToggleContentBComponent implements OnInit {

  @Input() datas: Omit<DatasModel, "features">;

  constructor() { }

  ngOnInit() {
  }

}