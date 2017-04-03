import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from '../comment.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css'],
  providers: [CommentService]
})

export class CommentDetailComponent implements OnInit {
  commentId: number;
  singleComment: Comment;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.commentId = parseInt(urlParameters['id']);
    });
    this.singleComment = this.commentService.getIndividualComment(this.commentId);
      }

}
