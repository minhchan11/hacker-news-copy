import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { COMMENTS } from './comment-list';
import { Article } from './article.model';
import { ARTICLES } from './article-list';

@Injectable()
export class CommentService {

  constructor() { }
  getComments() {
    return COMMENTS;
  }

  getIndividualComment(commentId: number) {
    for (let i = 0; i < COMMENTS.length; i++) {
      if(  COMMENTS[i].id === commentId) {
        return COMMENTS[i];
      }
    }
  }

  getArticlebyComment(articleId: number){
    for (let i = 0; i < ARTICLES.length; i++) {
      if( ARTICLES[i].id === articleId){
        return ARTICLES[i];
      };
    }
  }

}
