import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  navLinks: { name: string; link: string }[] = [
    {
      name: `Logo`,
      //TODO This will need to be switch out when I get it from client
      link: `../../../assets/logo.png`
    },
    {
      name: `Home`,
      link: `#home`
    },
    {
      name: `Annuity Education`,
      link: `#annuity-education`
    },
    {
      name: `About Us`,
      link: `#about`
    },
    {
      name: `Terms of Use`,
      link: `#terms-of-use`
    },
    {
      name: `Contact`,
      link: `#contact`
    },
    {
      name: `☎ 713-348-9994`,
      link: `#`
    }
  ];

  constructor() {}

  ngOnInit() {}
}
