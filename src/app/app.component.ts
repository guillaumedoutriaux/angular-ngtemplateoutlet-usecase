import { HttpClient } from "@angular/common/http";
import { Component, VERSION } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface DatasModel {
  about: string;
  features: string;
  picture: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  public datas$: Observable<DatasModel>;
  public texts$: Observable<Omit<DatasModel, "picture">>;
  public picture$: Observable<Omit<DatasModel, "features">>;

  constructor(private http: HttpClient) {
    
    this.datas$ = this.http.get<DatasModel>(
      "https://run.mocky.io/v3/de09d595-5e38-48cb-807f-f76d65541332"
    );
    
    this.texts$ = this.datas$.pipe(
      map(datas => {
        const { picture, ...text } = datas;
        return text;
      })
    );

    this.picture$ = this.datas$.pipe(
      map(datas => {
        const { features, ...textWithPicture } = datas;
        return textWithPicture;
      })
    );
  }

}
