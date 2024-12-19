import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { ArtisanService } from "../../components/services/auth.artisanService";
import { AuthService } from "../../components/services/auth.service";
import { ReservationService } from "../../components/services/reservation.service";
import { ArtisanDetail, ServiceDetail } from "../../models/artisan.model";

@Component({
  selector: "app-service-confirmation",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./service-confirmation-component.html",
})
export class ServiceConfirmationComponent implements OnInit {
  artisan: ArtisanDetail | null = null;
  service: ServiceDetail | null = null;
  isSubmitting: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artisanService: ArtisanService,
    private authService: AuthService,
    private reservationService: ReservationService
  ) {
    const currentUser = this.authService.currentUserValue;
    if (!currentUser || !currentUser.roles.includes("CLIENT")) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    if (this.authService.currentUserValue?.roles.includes("CLIENT")) {
      const artisanId = this.route.snapshot.queryParams["artisanId"];
      const serviceId = this.route.snapshot.queryParams["serviceId"];

      if (artisanId) {
        this.loadArtisanDetails(+artisanId, +serviceId);
      }
    }
  }

  loadArtisanDetails(artisanId: number, serviceId: number) {
    this.artisanService.getArtisanDetails(artisanId).subscribe({
      next: (data) => {
        this.artisan = data;
        this.service = data.services?.find((s) => s.id === serviceId) || null;
      },
      error: (error) => {
        console.error("Error loading details:", error);
        this.router.navigate(["/artisan", artisanId]);
      },
    });
  }

  onCancel() {
    this.router.navigate(["/artisan", this.artisan?.id]);
  }

  onConfirm() {
    console.log("artisanID : ", this.artisan?.id);
    console.log("ServiceID : ", this.service?.id);

    if (!this.authService.currentUserValue?.roles.includes("CLIENT")) {
      this.router.navigate(["/login"]);
      return;
    }

    const currentUser = this.authService.currentUserValue;
    if (!this.artisan || !this.service || !currentUser) return;

    this.isSubmitting = true;

    const reservationData = {
      clientId: currentUser.id,
      artisanId: this.artisan.id,
      serviceId: this.service.id,
      montant: this.service.tarif,
      notes: `Service request for ${this.service.titre}`,
    };

    this.reservationService.createReservation(reservationData).subscribe({
      next: (response) => {
        // Show success message
        alert("Service request submitted successfully!");
        // Navigate to client dashboard or reservations page
        this.router.navigate(["/client/dashboard/page"]);
      },
      error: (error) => {
        console.error("Error creating reservation:", error);
        alert("Failed to submit service request. Please try again.");
        this.isSubmitting = false;
      },
    });
  }
}

// import { Component, OnInit } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { ActivatedRoute, Router } from "@angular/router";
// import { ArtisanService } from "../../components/services/auth.artisanService";
// import { AuthService } from "../../components/services/auth.service";
// import { ArtisanDetail, ServiceDetail } from "../../models/artisan.model";

// @Component({
//   selector: "app-service-confirmation",
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: "./service-confirmation-component.html",
// })
// export class ServiceConfirmationComponent implements OnInit {
//   artisan: ArtisanDetail | null = null;
//   service: ServiceDetail | null = null;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private artisanService: ArtisanService,
//     private authService: AuthService
//   ) {
//     // Check if user is a client, redirect if not
//     const currentUser = this.authService.currentUserValue;
//     if (!currentUser || !currentUser.roles.includes("CLIENT")) {
//       this.router.navigate(["/"]);
//     }
//   }

//   ngOnInit() {
//     // Only proceed if user is a client
//     if (this.authService.currentUserValue?.roles.includes("CLIENT")) {
//       const artisanId = this.route.snapshot.queryParams["artisanId"];
//       const serviceId = this.route.snapshot.queryParams["serviceId"];

//       if (artisanId) {
//         this.loadArtisanDetails(+artisanId, +serviceId);
//       }
//     }
//   }

//   loadArtisanDetails(artisanId: number, serviceId: number) {
//     this.artisanService.getArtisanDetails(artisanId).subscribe({
//       next: (data) => {
//         this.artisan = data;
//         this.service = data.services?.find((s) => s.id === serviceId) || null;
//       },
//       error: (error) => {
//         console.error("Error loading details:", error);
//         this.router.navigate(["/artisan", artisanId]);
//       },
//     });
//   }

//   onCancel() {
//     this.router.navigate(["/artisan", this.artisan?.id]);
//   }

//   onConfirm() {
//     // Here you'll implement the service request confirmation
//     // Make sure to verify the user is still authenticated and is a CLIENT
//     if (this.authService.currentUserValue?.roles.includes("CLIENT")) {
//       console.log("Service request confirmed");
//       // Implement your confirmation logic here
//     } else {
//       this.router.navigate(["/login"]);
//     }
//   }
// }
