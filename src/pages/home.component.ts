import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero.component';
import { SearchComponent } from '../components/search.component';
import { CategoriesComponent } from '../components/categories.component';
import { FeaturedArtisansComponent } from '../components/featured-artisans.component';
import { WhyChooseUsComponent } from '../components/why-choose-us.component';
import { HowItWorksComponent } from '../components/how-it-works.component';
import { TestimonialsComponent } from '../components/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SearchComponent,
    CategoriesComponent,
    FeaturedArtisansComponent,
    WhyChooseUsComponent,
    HowItWorksComponent,
    TestimonialsComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-search></app-search>
    <app-categories></app-categories>
    <app-featured-artisans></app-featured-artisans>
    <app-why-choose-us></app-why-choose-us>
    <app-how-it-works></app-how-it-works>
    <app-testimonials></app-testimonials>
  `
})
export class HomeComponent {}