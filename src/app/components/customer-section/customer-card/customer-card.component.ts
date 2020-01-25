import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  customerCards: {name: string, img: string, content: string}[] = [
    {
      name: 'Hardol Doe',
      img: `../../../../assets/images/tyler-nix-ZGa9d1a_4tA-unsplash.jpg`,
      content: `Swearem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla.`
    },
    {
      name: 'Jane Schmidt',
      img: `../../../../assets/images/marivi-pazos-cvpk5Y4ZWUs-unsplash.jpg`,
      content: `Swearem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla.`
    },
    {
      name: 'John Smith',
      img: `../../../../assets/images/marius-ciocirlan-vMV6r4VRhJ8-unsplash.jpg`,
      content: `Swearem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla.`
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
