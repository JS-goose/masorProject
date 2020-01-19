import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news-article",
  templateUrl: "./news-article.component.html",
  styleUrls: ["./news-article.component.css"]
})
export class NewsArticleComponent implements OnInit {
  industryNewsArticles: {
    title: string;
    link: string;
    exerpt: string;
    imgURL: string;
    alt: string
  }[] = [
    {
      title: `Industry Article 1`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `../../../../assets/images/christine-roy-ir5MHI6rPg0-unsplash.jpg`,
      alt: ``
    },
    {
      title: `Industry Article 2`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `../../../../assets/images/fabian-blank-pElSkGRA2NU-unsplash.jpg`,
      alt: ``
    },
    {
      title: `Industry Article 3`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `../../../../assets/images/helloquence-5fNmWej4tAA-unsplash.jpg`,
      alt: ``
    },
    {
      title: `Industry Article 4`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `../../../../assets/images/markus-spiske-5gGcn2PRrtc-unsplash.jpg`,
      alt: ``
    },
    {
      title: `Industry Article 5`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `../../../../assets/images/michael-longmire-lhltMGdohc8-unsplash.jpg`,
      alt: ``
    },
    {
      title: `Industry Article 6`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `../../../../assets/images/thought-catalog-Xeo_7HSwYsA-unsplash.jpg`,
      alt: ``
    }
  ];
  constructor() {}

  ngOnInit() {}
}
