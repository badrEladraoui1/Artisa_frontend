import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ArtisanDisplay } from "../../models/artisan.model";

@Component({
  selector: "app-artisan-card",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./artisan-card.component.html",
})
export class ArtisanCardComponent {
  @Input() artisan!: ArtisanDisplay;
}
