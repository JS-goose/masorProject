import { Component, OnInit } from "@angular/core";
import { Customer } from "./customer model/customer.model";

@Component({
  selector: "app-customer-section",
  templateUrl: "./customer-section.component.html",
  styleUrls: ["./customer-section.component.css"],
})
export class CustomerSectionComponent implements OnInit {
  customerCards: Customer[] = [
    new Customer(
      `Hardol Doe`,
      `../../../assets/images/dragos-gontariu-GH-mSApoKO0-unsplash.jpg`,
      `Swearem ipsum dolor sit amet, consectetur adipiscing elit. `,
      `a human smiling`,
      `1`
    ),
    new Customer(
      `Jane Schmidt`,
      `../../../assets/images/marivi-pazos-cvpk5Y4ZWUs-unsplash.jpg`,
      `Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. `,
      `a human woman`,
      `2`
    ),
    new Customer(
      `John Smith`,
      `../../../assets/images/marius-ciocirlan-vMV6r4VRhJ8-unsplash.jpg`,
      `Vestibulum placerat purus ut nibh aliquam fringilla.`,
      `a man smiling`,
      `3`
    ),
  ];
  constructor() { }

  ngOnInit() { }
}
