import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RequestCardComponent } from "./request-card.component";
import { RouterModule } from "@angular/router";
import { ReservationResponseDto } from "../../../../models/reservation.model";
import { ReservationService } from "../../../../components/services/reservation.service";
import { AuthService } from "../../../../components/services/auth.service";

@Component({
  selector: "app-client-requests",
  standalone: true,
  imports: [CommonModule, RequestCardComponent, RouterModule],
  templateUrl: "./client-requests.component.html",
})
export class ClientRequestsComponent implements OnInit {
  requests: ReservationResponseDto[] = [];
  isLoading: boolean = true;

  constructor(
    private reservationService: ReservationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    console.log("Component initialized");
    const currentUser = this.authService.currentUserValue;
    console.log("Current user:", JSON.stringify(currentUser, null, 2));

    if (currentUser?.id) {
      this.loadRequests(currentUser.id);
    } else {
      this.isLoading = false;
      console.error("Authentication error: No current user found");
    }
  }

  loadRequests(artisanId: number) {
    console.log("Starting request load for artisan:", artisanId);
    this.reservationService.getArtisanReservations(artisanId).subscribe({
      next: (data) => {
        console.log("API Response:", JSON.stringify(data, null, 2));
        console.log("Number of requests received:", data?.length || 0);
        this.requests = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("API Error Details:", {
          status: error?.status,
          message: error?.message,
          error: error?.error,
        });
        this.isLoading = false;
      },
      complete: () => {
        console.log("Request loading completed");
        console.log("Current requests state:", this.requests);
      },
    });
  }

  onAcceptRequest(requestId: number) {
    if (!requestId) return;

    this.reservationService
      .updateReservationStatus(requestId, "IN_PROGRESS")
      .subscribe({
        next: () => {
          const currentUser = this.authService.currentUserValue;
          if (currentUser?.id) {
            this.loadRequests(currentUser.id);
          }
        },
        error: (error) => console.error("Error accepting request:", error),
      });
  }

  onDeclineRequest(requestId: number) {
    if (!requestId) return;

    if (confirm("Are you sure you want to decline this request?")) {
      this.reservationService
        .updateReservationStatus(requestId, "CANCELED")
        .subscribe({
          next: () => {
            const currentUser = this.authService.currentUserValue;
            if (currentUser?.id) {
              this.loadRequests(currentUser.id);
            }
          },
          error: (error) => console.error("Error declining request:", error),
        });
    }
  }

  onRequestMoreInfo(requestId: number) {
    console.log("More info requested for:", requestId);
  }
}
