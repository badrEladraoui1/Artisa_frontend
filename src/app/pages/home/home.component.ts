import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "../../components/for-home-page/hero-section/hero.component";
import { FeaturedArtisansComponent } from "../../components/for-home-page/featured-artisans/featured-artisans.component";
import { HowItWorksComponent } from "../../components/for-home-page/how-it-works-section/how-it-works.component";
import { TestimonialsComponent } from "../../components/for-home-page/testimonials/testimonials.component";
import { WhyChooseUsComponent } from "../../components/for-home-page/why-choose-us/why-choose-us.component";
import { CtaSectionComponent } from "../../components/for-home-page/cta-section/cta-section";
import { FeaturedCategoriesSectionComponent } from "../../components/for-home-page/featured-categories/featured-categories";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    FeaturedArtisansComponent,
    HowItWorksComponent,
    TestimonialsComponent,
    WhyChooseUsComponent,
    CtaSectionComponent,
    FeaturedCategoriesSectionComponent,
  ],
  templateUrl: "./home.component.html",
})
export class HomeComponent {}
