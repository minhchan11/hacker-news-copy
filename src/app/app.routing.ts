import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { CommentsComponent } from './comments/comments.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
