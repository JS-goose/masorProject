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
  }[] = [
    {
      title: `Industry Article 1`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `#`
    },
    {
      title: `Industry Article 2`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `#`
    },
    {
      title: `Industry Article 3`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `#`
    },
    {
      title: `Industry Article 4`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `#`
    },
    {
      title: `Industry Article 5`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `#`
    },
    {
      title: `Industry Article 6`,
      link: `#`,
      exerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      imgURL: `#`
    }
  ];
  constructor() {}

  ngOnInit() {}
}
