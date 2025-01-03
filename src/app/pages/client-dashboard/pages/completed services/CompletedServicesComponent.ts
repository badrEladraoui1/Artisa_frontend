import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReservationResponseDto } from "../../../../models/reservation.model";
import { ReservationService } from "../../../../components/services/reservation.service";
import { AuthService } from "../../../../components/services/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { ReviewDialogComponent } from "../../components/review/review-dialog.component";

@Component({
  selector: "app-completed-services",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./CompletedServicesComponent.html",
})
export class CompletedServicesComponent implements OnInit {
  completedReservations: ReservationResponseDto[] = [];
  isLoading = true;

  constructor(
    private reservationService: ReservationService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.loadCompletedReservations(currentUser.id);
    }
  }

  loadCompletedReservations(clientId: number) {
    this.isLoading = true;
    this.reservationService.getClientCompletedReservations(clientId).subscribe({
      next: (data) => {
        this.completedReservations = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading completed reservations:", error);
        this.isLoading = false;
      },
    });
  }

  openReviewDialog(reservation: ReservationResponseDto) {
    const dialogRef = this.dialog.open(ReviewDialogComponent, {
      width: "500px",
      data: { artisanName: reservation.artisanName },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Submit review
        this.reservationService.submitReview(reservation.id, result).subscribe({
          next: () => {
            alert("Thank you for your review!");
            // Refresh the list to update the reviewed status
            const currentUser = this.authService.currentUserValue;
            if (currentUser) {
              this.loadCompletedReservations(currentUser.id);
            }
          },
          error: (error) => {
            console.error("Error submitting review:", error);
            alert("Failed to submit review. Please try again.");
          },
        });
      }
    });
  }
}
