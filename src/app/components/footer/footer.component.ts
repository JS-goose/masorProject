import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  bottomNavLinks: { name: string; link: string }[] = [
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
  ];

  bottomSocialLinks: { name: string; link: string; src: string }[] = [
    {
      name: `Twitter`,
      link: `https://twitter.com`,
      src: `<i class="fab fa-twitter"></i>`
    },
    {
      name: `Facebook`,
      link: `https://facebook.com`,
      src: `<i class="fab fa-facebook-f"></i>`
    },
    {
      name: `YouTube`,
      link: `https://youtube.com`,
      src: `<i class="fab fa-youtube"></i>`
    },
    {
      name: `Instagram`,
      link: `https://instagram.com`,
      src: `<i class="fab fa-instagram"></i>`
    }
  ];

  constructor() {}

  ngOnInit() {}
}
