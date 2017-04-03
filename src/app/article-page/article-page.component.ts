import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from '../comment.model';
import { COMMENTS } from '../comment-list';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],
  providers: [ArticleService]
})


export class ArticlePageComponent implements OnInit {
  comments: Comment[] = [];
  article: Article;
  articleId: number;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private articleService: ArticleService
  ) { }

  submit(comment) {
        COMMENTS.push(comment);
    }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.articleId = parseInt(urlParameters['id']);
    });
    this.comments = this.articleService.getComments(this.articleId);
    this.article= this.articleService.getIndividualArticle(this.articleId);
  }

}
