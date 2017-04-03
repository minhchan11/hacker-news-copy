import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { ARTICLES } from './article-list';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles() {
    return ARTICLES;
  }
}
