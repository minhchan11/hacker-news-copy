import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ARTICLES } from '../article-list';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  submit (title: string, url: string, id: number){
    var newArticle = new Article(title, url, id);
    ARTICLES.push(newArticle);
  }

  constructor() { }

  ngOnInit() {
  }

}
