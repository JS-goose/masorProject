import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
  topNavLinks: {name: string, link: string}[] = [
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
  ]

  constructor() { }

  ngOnInit() {
  }

}
