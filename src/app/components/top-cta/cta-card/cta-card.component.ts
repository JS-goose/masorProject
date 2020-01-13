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

  ctaCards: {title: string, description: string}[] = [
    {
      title: `Get Cash Now`,
      description: `Sell us your structured settlement and get the money you need today.`,
    },
    {
      title: `Purchase Annuities`,
      description: `Learn how annuities provide guaranteed future income.`,
    }
  ]

}
