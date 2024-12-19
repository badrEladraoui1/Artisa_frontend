// purchases.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReservationResponseDto } from "../../../../models/reservation.model";
import { ReservationService } from "../../../../components/services/reservation.service";
import { AuthService } from "../../../../components/services/auth.service";

@Component({
  selector: "app-purchases",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./purchases.component.html",
})
export class PurchasesComponent implements OnInit {
  reservations: ReservationResponseDto[] | null = null;
  isLoading = true;

  constructor(
    private reservationService: ReservationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.loadReservations(currentUser.id);
    }
  }

  loadReservations(clientId: number) {
    this.isLoading = true;
    this.reservationService.getClientReservations(clientId).subscribe({
      next: (data) => {
        this.reservations = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading reservations:", error);
        this.isLoading = false;
      },
    });
  }

  cancelReservation(reservationId: number) {
    if (confirm("Are you sure you want to cancel this request?")) {
      this.reservationService
        .updateReservationStatus(reservationId, "CANCELED")
        .subscribe({
          next: () => {
            const currentUser = this.authService.currentUserValue;
            if (currentUser) {
              this.loadReservations(currentUser.id);
            }
          },
          error: (error) => {
            console.error("Error canceling reservation:", error);
            alert("Failed to cancel the request. Please try again.");
          },
        });
    }
  }
}
