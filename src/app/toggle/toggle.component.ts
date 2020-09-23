import {
  Component,
  ContentChild,
  OnInit,
  TemplateRef
} from "@angular/core";

@Component({
  selector: "app-toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.css"]
})
export class ToggleComponent implements OnInit {

  @ContentChild("toggleHeader", { static: false })
  toggleHeaderRef: TemplateRef<any>;
  @ContentChild("toggleContent", { static: false })
  toggleContentRef: TemplateRef<any>;

  public isPanelActive = false;

  constructor() {}

  ngOnInit() {}

  public togglePanel(): void {
    this.isPanelActive = !this.isPanelActive;
  }
}
