import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'browse',
    loadComponent: () => import('./pages/browse-artisans/browse-artisans.component').then(m => m.BrowseArtisansComponent)
  },
  {
    path: 'artisan/:id',
    loadComponent: () => import('./pages/artisan-detail/artisan-detail.component').then(m => m.ArtisanDetailComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup/client',
    loadComponent: () => import('./pages/auth/client-signup/client-signup.component').then(m => m.ClientSignupComponent)
  },
  {
    path: 'signup/artisan',
    loadComponent: () => import('./pages/auth/artisan-signup/artisan-signup.component').then(m => m.ArtisanSignupComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];