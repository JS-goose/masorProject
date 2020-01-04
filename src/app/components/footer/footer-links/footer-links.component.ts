import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.css']
})
export class FooterLinksComponent implements OnInit {
  bottomNavLinks: { name: string, link: string }[] = [
    {
      name: `Home`,
      link: `#home`
    },
    {
      name: `About Us`,
      link: `#about-us`
    },
    {
      name: `Services`,
      link: `#services`
    },
    {
      name: `Annuity Education`,
      link: `#annuity-education`
    },
    {
      name: `Terms of Use`,
      link: `#terms-of-use`
    },
    {
      name: `Purchase Annuities`,
      link: `#purchase-annuities`
    },
    {
      name: `Our Customers`,
      link: `#out-customers`
    },
    {
      name: `Contact`,
      link: `#contact`
    }
  ]

  bottomSocialLinks: { name: string, link: string, src: string }[] = [
    {
      name: `Twitter`,
      link: `https://twitter.com`,
      src: ``
    },
    {
      name: `Facebook`,
      link: `https://facebook.com`,
      src: ``
    },
    {
      name: `YouTube`,
      link: `https://youtube.com`,
      src: ``
    },
    {
      name: `Instagram`,
      link: `https://instagram.com`,
      src: ``
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
