import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArtisanCardComponent } from "../../components/artisan-card/artisan-card.component";
import { FilterSectionComponent } from "../../components/filter-section/filter-section.component";
import { ArtisanDisplay } from "../../models/artisan.model";
import { ArtisanService } from "../../components/services/auth.artisanService";

@Component({
  selector: "app-browse-artisans",
  standalone: true,
  imports: [CommonModule, ArtisanCardComponent, FilterSectionComponent],
  templateUrl: "./browse-artisans.component.html",
})
export class BrowseArtisansComponent implements OnInit {
  selectedCategory = "";
  selectedLocation = "";
  selectedRating = "";
  artisans: ArtisanDisplay[] = [];

  constructor(private artisanService: ArtisanService) {}

  ngOnInit() {
    this.loadArtisans();
  }

  loadArtisans() {
    this.artisanService.getAllArtisans().subscribe({
      next: (data) => {
        this.artisans = data;
      },
      error: (error) => {
        console.error("Error loading artisans:", error);
      },
    });
  }

  get filteredArtisans(): ArtisanDisplay[] {
    return this.artisans.filter((artisan) => {
      const matchesCategory =
        !this.selectedCategory ||
        artisan.metier
          .toLowerCase()
          .includes(this.selectedCategory.toLowerCase());

      const matchesLocation =
        !this.selectedLocation ||
        artisan.adresse
          .toLowerCase()
          .includes(this.selectedLocation.toLowerCase());

      const matchesRating =
        !this.selectedRating ||
        this.getStarCount(artisan.rating) >= parseInt(this.selectedRating);

      return matchesCategory && matchesLocation && matchesRating;
    });
  }

  private getStarCount(rating: string): number {
    return (rating.match(/⭐/g) || []).length;
  }

  onFilterChange(filters: {
    category: string;
    location: string;
    rating: string;
  }): void {
    this.selectedCategory = filters.category;
    this.selectedLocation = filters.location;
    this.selectedRating = filters.rating;
  }
}

// export class BrowseArtisansComponent {
//   selectedCategory = "";
//   selectedLocation = "";
//   selectedRating = "";

//   artisans: Artisan[] = [
//     {
//       id: "1",
//       name: "David Miller",
//       image:
//         "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500&q=80",
//       rating: "⭐⭐⭐⭐⭐ (48 reviews)",
//       location: "Brooklyn, New York",
//       phone: "(555) 123-4567",
//       description:
//         "Master woodworker specializing in custom furniture and architectural elements.",
//       services: [
//         {
//           name: "Custom Furniture Design",
//           price: "From $1,500",
//           description: "Bespoke furniture pieces tailored to your needs",
//         },
//         {
//           name: "Furniture Restoration",
//           price: "From $500",
//           description: "Expert restoration of antique pieces",
//         },
//       ],
//       tags: ["Woodworking", "Custom Furniture", "Restoration"],
//     },
//     {
//       id: "2",
//       name: "Maria Rodriguez",
//       image:
//         "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&q=80",
//       rating: "⭐⭐⭐⭐⭐ (36 reviews)",
//       location: "Los Angeles, CA",
//       phone: "(555) 234-5678",
//       description:
//         "Contemporary ceramist creating unique pieces for home and galleries.",
//       services: [
//         {
//           name: "Custom Ceramic Art",
//           price: "From $300",
//           description: "Unique ceramic pieces designed to your specifications",
//         },
//         {
//           name: "Pottery Classes",
//           price: "From $75/hour",
//           description: "Private and group pottery classes",
//         },
//       ],
//       tags: ["Pottery", "Ceramics", "Art"],
//     },
//     {
//       id: "3",
//       name: "James Thompson",
//       image:
//         "https://images.unsplash.com/photo-1556760544-74068565f05c?w=500&q=80",
//       rating: "⭐⭐⭐⭐½ (52 reviews)",
//       location: "Chicago, IL",
//       phone: "(555) 345-6789",
//       description:
//         "Experienced metalworker crafting both functional and decorative pieces.",
//       services: [
//         {
//           name: "Custom Metalwork",
//           price: "From $800",
//           description: "Bespoke metal sculptures and functional pieces",
//         },
//         {
//           name: "Metal Restoration",
//           price: "From $400",
//           description: "Professional restoration services",
//         },
//       ],
//       tags: ["Metalwork", "Sculpture", "Custom"],
//     },
//   ];

//   get filteredArtisans(): Artisan[] {
//     return this.artisans.filter((artisan) => {
//       const matchesCategory =
//         !this.selectedCategory ||
//         artisan.tags.some((tag) =>
//           tag.toLowerCase().includes(this.selectedCategory.toLowerCase())
//         );

//       const matchesLocation =
//         !this.selectedLocation ||
//         artisan.location
//           .toLowerCase()
//           .includes(this.selectedLocation.toLowerCase());

//       const matchesRating =
//         !this.selectedRating ||
//         this.getStarCount(artisan.rating) >= parseInt(this.selectedRating);

//       return matchesCategory && matchesLocation && matchesRating;
//     });
//   }

//   private getStarCount(rating: string): number {
//     return (rating.match(/⭐/g) || []).length;
//   }

//   onFilterChange(filters: {
//     category: string;
//     location: string;
//     rating: string;
//   }): void {
//     this.selectedCategory = filters.category;
//     this.selectedLocation = filters.location;
//     this.selectedRating = filters.rating;
//   }
// }
