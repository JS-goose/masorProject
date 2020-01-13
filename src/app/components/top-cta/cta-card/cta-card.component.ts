import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-card',
  templateUrl: './cta-card.component.html',
  styleUrls: ['./cta-card.component.css']
})
export class CtaCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ctaCards: {title: string, descrption: string}[] = [
    {
      title: `Get Cash Now`,
      descrption: `Sell us your structured settlement and get the money you need today.`,
    },
    {
      title: `Purchase Annuities`,
      descrption: `Learn how annuities provide guaranteed future income.`,
    }
  ]

}
