import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ARTICLES } from '../article-list';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [ArticleService]
})
export class NewsComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

}
