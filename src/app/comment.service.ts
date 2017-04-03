import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { COMMENTS } from './comment-list';

@Injectable()
export class CommentService {

  constructor() { }
  getComments() {
    return COMMENTS;
  }
}
