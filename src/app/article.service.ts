import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { ARTICLES } from './article-list';
import { Comment } from './comment.model';
import { COMMENTS } from './comment-list';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles() {
    return ARTICLES;
  }

  getComments(id) {
    var output: Comment[] = [];
    for(let i = 0; i< COMMENTS.length; i++) {
      if(COMMENTS[i].articleId === id) {
        output.push(COMMENTS[i]);
      }
    }
    return output;
  }
}
