import { Component, OnInit } from "@angular/core";
import { Customer } from "./customer model/customer.model";

@Component({
  selector: "app-customer-section",
  templateUrl: "./customer-section.component.html",
  styleUrls: ["./customer-section.component.css"]
})
export class CustomerSectionComponent implements OnInit {
  customerCards: Customer[] = [
    new Customer(
      `Hardol Doe`,
      `../../../assets/images/tyler-nix-ZGa9d1a_4tA-unsplash.jpg`,
      `Swearem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla.`,
      `a human smiling`
    ),
    new Customer(
      `Jane Schmidt`,
      `../../../assets/images/marivi-pazos-cvpk5Y4ZWUs-unsplash.jpg`,
      `Swearem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla.`,
      `a human woman`
    ),
    new Customer(
      `John Smith`,
      `../../../assets/images/marius-ciocirlan-vMV6r4VRhJ8-unsplash.jpg`,
      `Swearem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla.`,
      `a man smiling`
    )
  ];
  constructor() {}

  ngOnInit() {}
}
