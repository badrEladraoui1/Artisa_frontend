// purchases-update.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReservationResponseDto } from "../../../../models/reservation.model";
import { ReservationService } from "../../../../components/services/reservation.service";
import { AuthService } from "../../../../components/services/auth.service";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-purchases-update",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./purchases-update.component.html",
})
export class PurchasesUpdateComponent implements OnInit {
  completedReservations: ReservationResponseDto[] = [];
  canceledReservations: ReservationResponseDto[] = [];
  isLoading = true;

  constructor(
    private reservationService: ReservationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.loadReservationsHistory(currentUser.id);
    }
  }

  loadReservationsHistory(clientId: number) {
    this.isLoading = true;

    // Using forkJoin to make parallel requests
    forkJoin({
      completed:
        this.reservationService.getClientCompletedReservations(clientId),
      canceled: this.reservationService.getClientCanceledReservations(clientId),
    }).subscribe({
      next: (result) => {
        this.completedReservations = result.completed;
        this.canceledReservations = result.canceled;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading reservation history:", error);
        this.isLoading = false;
      },
    });
  }
}
