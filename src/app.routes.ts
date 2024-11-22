import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app/pages/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'browse',
    loadComponent: () => import('./app/pages/browse-artisans/browse-artisans.component')
      .then(m => m.BrowseArtisansComponent)
  },
  {
    path: 'artisan/:id',
    loadComponent: () => import('./app/pages/artisan-detail/artisan-detail.component')
      .then(m => m.ArtisanDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];