import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment.model';
import { COMMENTS } from '../comment-list';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentService]
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.comments = this.commentService.getComments();
  }

}
