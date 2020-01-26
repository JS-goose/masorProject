import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class Customer {
  public name: string;
  public image: string;
  public content: string;
  public imageAlt: string;

  constructor(name: string, image: string, content: string, imageAlt: string) {
    this.name = name;
    this.image = image;
    this.content = content;
    this.imageAlt = imageAlt;
  }
}
