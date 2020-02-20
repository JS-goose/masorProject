import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class Customer {
  public name: string;
  public image: string;
  public content: string;
  public imageAlt: string;
  public imgIndex: string | number;

  constructor(
    name: string,
    image: string,
    content: string,
    imageAlt: string,
    imgIndex: string | number
  ) {
    this.name = name;
    this.image = image;
    this.content = content;
    this.imageAlt = imageAlt;
    this.imgIndex = imgIndex;
  }
}
