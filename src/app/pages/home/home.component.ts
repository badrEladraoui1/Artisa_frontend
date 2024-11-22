import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "../../../components/hero.component";
import { FeaturedArtisansComponent } from "../../../components/featured-artisans.component";
import { HowItWorksComponent } from "../../../components/how-it-works.component";
import { TestimonialsComponent } from "../../../components/testimonials.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us.component";

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
  ],
  templateUrl: "./home.component.html",
})
export class HomeComponent {}
