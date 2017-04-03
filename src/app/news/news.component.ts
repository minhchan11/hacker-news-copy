import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ARTICLES } from '../article-list';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [ArticleService]
})
export class NewsComponent implements OnInit {
  articles: Article[];

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  goToArticle(clickedArticle: Article) {
    this.router.navigate(['article-page', clickedArticle.id]);
  };

}
