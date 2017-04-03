import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { COMMENTS } from './comment-list';

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

}
