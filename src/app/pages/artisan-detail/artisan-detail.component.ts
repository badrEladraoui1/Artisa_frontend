import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ArtisanHeroComponent } from "../../components/artisan-hero/artisan-hero.component";
import { ServiceCardComponent } from "../../components/service-card/service-card.component";
import { CustomServiceFormComponent } from "../../components/custom-service-form/custom-service-form.component";
import { ArtisanDetail, ServiceDetail } from "../../models/artisan.model";
import { ArtisanService } from "../../components/services/auth.artisanService";

interface Artisan {
  id: string;
  name: string;
  image: string;
  rating: string;
  location: string;
  phone: string;
  email: string;
  description: string;
  services: Array<{
    name: string;
    description: string;
    price: string;
    experience: string;
    images: string[];
  }>;
}

@Component({
  selector: "app-artisan-detail",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArtisanHeroComponent,
    ServiceCardComponent,
    CustomServiceFormComponent,
  ],
  templateUrl: "./artisan-detail.component.html",
})
export class ArtisanDetailComponent implements OnInit {
  // artisan: Artisan | null = null;

  // private artisans: Record<string, Artisan> = {
  //   "1": {
  //     id: "1",
  //     name: "David Miller",
  //     image:
  //       "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500&q=80",
  //     rating: "⭐⭐⭐⭐⭐ (48 reviews)",
  //     location: "Brooklyn, New York",
  //     phone: "(555) 123-4567",
  //     email: "david.miller@artisa.com",
  //     description:
  //       "Master woodworker specializing in custom furniture and architectural elements.",
  //     services: [
  //       {
  //         name: "Custom Furniture Design",
  //         description:
  //           "Bespoke furniture pieces tailored to your specific needs and style preferences.",
  //         price: "From $1,500",
  //         experience: "20+ years experience",
  //         images: [
  //           "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&q=80",
  //         ],
  //       },
  //       {
  //         name: "Furniture Restoration",
  //         description:
  //           "Expert restoration of antique and vintage furniture pieces.",
  //         price: "From $500",
  //         experience: "15+ years experience",
  //         images: [
  //           "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80",
  //         ],
  //       },
  //     ],
  //   },
  //   "2": {
  //     id: "2",
  //     name: "Maria Rodriguez",
  //     image:
  //       "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&q=80",
  //     rating: "⭐⭐⭐⭐⭐ (36 reviews)",
  //     location: "Los Angeles, CA",
  //     phone: "(555) 234-5678",
  //     email: "maria.rodriguez@artisa.com",
  //     description:
  //       "Contemporary ceramist creating unique pieces for home and galleries.",
  //     services: [
  //       {
  //         name: "Custom Ceramic Art",
  //         description:
  //           "Unique ceramic pieces designed to your specifications. Perfect for home decor, special occasions, or gallery exhibitions.",
  //         price: "From $300",
  //         experience: "12+ years experience",
  //         images: [
  //           "https://images.unsplash.com/photo-1565193298357-c5b46b0ff68b?w=500&q=80",
  //         ],
  //       },
  //       {
  //         name: "Pottery Classes",
  //         description:
  //           "Private and group pottery classes for all skill levels. Learn wheel throwing, hand building, and glazing techniques.",
  //         price: "From $75/hour",
  //         experience: "8+ years teaching",
  //         images: [
  //           "https://images.unsplash.com/photo-1578749556591-ea5a3e3f56b5?w=500&q=80",
  //         ],
  //       },
  //       {
  //         name: "Ceramic Dinnerware Sets",
  //         description:
  //           "Complete sets of handcrafted plates, bowls, and cups. Each piece is uniquely designed and food-safe.",
  //         price: "From $600/set",
  //         experience: "10+ years experience",
  //         images: [
  //           "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&q=80",
  //         ],
  //       },
  //     ],
  //   },
  //   "3": {
  //     id: "3",
  //     name: "James Thompson",
  //     image:
  //       "https://images.unsplash.com/photo-1556760544-74068565f05c?w=500&q=80",
  //     rating: "⭐⭐⭐⭐½ (52 reviews)",
  //     location: "Chicago, IL",
  //     phone: "(555) 345-6789",
  //     email: "james.thompson@artisa.com",
  //     description:
  //       "Experienced metalworker crafting both functional and decorative pieces.",
  //     services: [
  //       {
  //         name: "Custom Metalwork",
  //         description:
  //           "Bespoke metal sculptures and functional pieces. From decorative gates to unique wall art.",
  //         price: "From $800",
  //         experience: "15+ years experience",
  //         images: [
  //           "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=500&q=80",
  //         ],
  //       },
  //       {
  //         name: "Metal Restoration",
  //         description:
  //           "Professional restoration of metal artwork, fixtures, and architectural elements.",
  //         price: "From $400",
  //         experience: "10+ years experience",
  //         images: [
  //           "https://images.unsplash.com/photo-1533635424274-5a128062a904?w=500&q=80",
  //         ],
  //       },
  //       {
  //         name: "Architectural Metal Elements",
  //         description:
  //           "Custom railings, staircases, and architectural details. Combining functionality with artistic design.",
  //         price: "From $1,200",
  //         experience: "12+ years experience",
  //         images: [
  //           "https://images.unsplash.com/photo-1618090584176-7132b9911657?w=500&q=80",
  //         ],
  //       },
  //     ],
  //   },
  // };

  artisan: ArtisanDetail | null = null;

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const artisanId = +params["id"];
      this.loadArtisanDetails(artisanId);
    });
  }

  loadArtisanDetails(artisanId: number) {
    this.artisanService.getArtisanDetails(artisanId).subscribe({
      next: (data) => {
        this.artisan = data;
      },
      error: (error) => {
        console.error("Error loading artisan details:", error);
      },
    });
  }

  onInterested(service: ServiceDetail) {
    // For now, just show an alert. Later you can implement proper contact functionality
    alert(
      `Thank you for your interest in ${service.titre}! We'll contact you soon.`
    );
  }
}
