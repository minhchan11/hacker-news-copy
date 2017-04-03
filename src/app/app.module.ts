import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CommentsComponent,
    CommentDetailComponent,
    ArticlePageComponent,
    NewArticleComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
