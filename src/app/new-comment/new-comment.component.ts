import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment.model';
import { COMMENTS } from '../comment-list';
import { CommentService } from '../comment.service';
import { Article } from '../article.model';
import { ARTICLES } from '../article-list';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  @Input() article : Article;
  @Output() submitSend = new EventEmitter();
  submit (author:string, content: string, id:string){
    var newComment = new Comment(author, content, parseInt(id), this.article.id);
    this.submitSend.emit(newComment);
  }
  constructor() { }

  ngOnInit() {
  }

}
