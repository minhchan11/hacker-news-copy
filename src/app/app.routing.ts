import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'comments/:id',
    component: CommentDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
