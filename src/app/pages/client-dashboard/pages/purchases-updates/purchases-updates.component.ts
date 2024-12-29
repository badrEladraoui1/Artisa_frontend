import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { forkJoin } from "rxjs";
import {
  CompletionConfirmationResponse,
  ReservationResponseDto,
} from "../../../../models/reservation.model";
import { ReservationService } from "../../../../components/services/reservation.service";
import { AuthService } from "../../../../components/services/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { PaymentComponent } from "../../components/payment/payment.component";
import { CommonModule } from "@angular/common";
import { ReviewDialogComponent } from "../../components/review/review-dialog.component";

@Component({
  selector: "app-purchases-update",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./purchases-update.component.html",
})
export class PurchasesUpdateComponent implements OnInit {
  completedReservations: ReservationResponseDto[] = [];
  canceledReservations: ReservationResponseDto[] = [];
  suggestedReservations: ReservationResponseDto[] = [];
  acceptedReservations: ReservationResponseDto[] = [];
  inProgressReservations: ReservationResponseDto[] = [];

  isLoading = true;

  constructor(
    private reservationService: ReservationService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.initializeData();
  }

  onClientConfirmCompletion(reservationId: number) {
    this.reservationService
      .confirmCompletion(reservationId, "CLIENT")
      .subscribe({
        next: (response: CompletionConfirmationResponse) => {
          if (response.bothConfirmed) {
            this.openReviewDialog(response);
          } else {
            alert(
              "Thank you for confirming! Waiting for artisan confirmation."
            );
            this.refreshData();
          }
        },
        error: (error) => {
          console.error("Error confirming completion:", error);
          alert("Failed to confirm completion. Please try again.");
        },
      });
  }

  private openReviewDialog(reservation: ReservationResponseDto) {
    const dialogRef = this.dialog.open(ReviewDialogComponent, {
      width: "500px",
      data: { artisanName: reservation.artisanName },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.reservationService.submitReview(reservation.id, result).subscribe({
          next: () => {
            alert("Thank you for your review!");
            this.refreshData();
          },
          error: (error) => {
            console.error("Error submitting review:", error);
            alert("Failed to submit review. Please try again.");
          },
        });
      }
    });
  }

  private initializeData() {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.loadReservationsHistory(currentUser.id);
    } else {
      this.isLoading = false;
    }
  }

  loadReservationsHistory(clientId: number) {
    this.isLoading = true;

    forkJoin({
      completed:
        this.reservationService.getClientCompletedReservations(clientId),
      canceled: this.reservationService.getClientCanceledReservations(clientId),
      suggested:
        this.reservationService.getClientSuggestedByArtisandReservations(
          clientId
        ),
      inProgress:
        this.reservationService.getClientInProgressReservations(clientId),
      accepted: this.reservationService.getClientAcceptedReservations(clientId),
    }).subscribe({
      next: (result) => {
        this.completedReservations = result.completed;
        this.canceledReservations = result.canceled;
        this.suggestedReservations = result.suggested;
        this.acceptedReservations = result.accepted;
        this.inProgressReservations = result.inProgress;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading reservation history:", error);
        this.isLoading = false;
        alert("Failed to load reservations. Please try again.");
      },
    });
  }

  onAcceptSuggestion(reservationId: number) {
    if (!reservationId) return;

    this.reservationService
      .updateReservationStatus(reservationId, "ACCEPTED")
      .subscribe({
        next: () => this.refreshData(),
        error: (error) => {
          console.error("Error accepting suggestion:", error);
          alert("Failed to accept suggestion. Please try again.");
        },
      });
  }

  onDeclineSuggestion(reservationId: number) {
    if (
      !reservationId ||
      !confirm("Are you sure you want to decline this suggested date?")
    )
      return;

    this.reservationService
      .updateReservationStatus(reservationId, "CANCELED")
      .subscribe({
        next: () => this.refreshData(),
        error: (error) => {
          console.error("Error declining suggestion:", error);
          alert("Failed to decline suggestion. Please try again.");
        },
      });
  }

  onProceedToPayment(reservation: ReservationResponseDto) {
    const dialogRef = this.dialog.open(PaymentComponent, {
      width: "600px",
      data: reservation,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.success) {
        this.reservationService
          .updateReservationStatus(reservation.id, "IN_PROGRESS")
          .subscribe({
            next: () => {
              alert("Payment successful! The service is now in progress.");
              this.refreshData();
            },
            error: (error) => {
              console.error("Error updating status:", error);
              alert(
                "Payment processed but status update failed. Please contact support."
              );
            },
          });
      }
    });
  }

  private refreshData() {
    const currentUser = this.authService.currentUserValue;
    if (currentUser?.id) {
      this.loadReservationsHistory(currentUser.id);
    }
  }
}
