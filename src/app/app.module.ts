import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MissionComponent } from './components/mission/mission.component';
import { IndustryNewsComponent } from './components/industry-news/industry-news.component';
import { NewsArticleComponent } from './components/industry-news/news-article/news-article.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    TopNavbarComponent,
    MissionComponent,
    IndustryNewsComponent,
    NewsArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
