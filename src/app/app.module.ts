import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { ToggleContentAComponent } from "./toggle-content-a/toggle-content-a.component";
import { ToggleContentBComponent } from "./toggle-content-b/toggle-content-b.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    ToggleComponent,
    ToggleContentAComponent,
    ToggleContentBComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
