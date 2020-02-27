import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  topNavLinks: { name: string, link: string }[] = [
    {
      name: `Fixed Annuities`,
      link: `#fixed-annuities`
    },
    {
      name: `Fixed-Index Annuities`,
      link: `#fixed-index-annuities`
    },
    {
      name: `Variable Annuities`,
      link: `#variable-annuities`
    },
    {
      name: `Immediate Annuities`,
      link: `#immediate-annuities`
    },
    {
      name: `Deferred Annuities`,
      link: `#deferred-annuities`
    }
  ];

  navLinks: { name: string; link: string }[] = [
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
  ];

  constructor() { }

  ngOnInit() { }
}
