import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ReservationResponseDto } from "../../../../models/reservation.model";
import { ReservationService } from "../../../../components/services/reservation.service";
import { AuthService } from "../../../../components/services/auth.service";
import { ReviewDialogComponent } from "../../components/review/review-dialog.component";

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
    private authService: AuthService,
    private dialog: MatDialog
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
            // Optionally refresh reservations
            const currentUser = this.authService.currentUserValue;
            if (currentUser) {
              this.loadReservations(currentUser.id);
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

// // purchases.component.ts
// import { Component, OnInit } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { RouterModule } from "@angular/router";
// import { ReservationResponseDto } from "../../../../models/reservation.model";
// import { ReservationService } from "../../../../components/services/reservation.service";
// import { AuthService } from "../../../../components/services/auth.service";

// @Component({
//   selector: "app-purchases",
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: "./purchases.component.html",
// })
// export class PurchasesComponent implements OnInit {
//   reservations: ReservationResponseDto[] | null = null;
//   isLoading = true;

//   constructor(
//     private reservationService: ReservationService,
//     private authService: AuthService
//   ) {}

//   ngOnInit() {
//     const currentUser = this.authService.currentUserValue;
//     if (currentUser) {
//       this.loadReservations(currentUser.id);
//     }
//   }

//   loadReservations(clientId: number) {
//     this.isLoading = true;
//     this.reservationService.getClientReservations(clientId).subscribe({
//       next: (data) => {
//         this.reservations = data;
//         this.isLoading = false;
//       },
//       error: (error) => {
//         console.error("Error loading reservations:", error);
//         this.isLoading = false;
//       },
//     });
//   }

//   cancelReservation(reservationId: number) {
//     if (confirm("Are you sure you want to cancel this request?")) {
//       this.reservationService
//         .updateReservationStatus(reservationId, "CANCELED")
//         .subscribe({
//           next: () => {
//             const currentUser = this.authService.currentUserValue;
//             if (currentUser) {
//               this.loadReservations(currentUser.id);
//             }
//           },
//           error: (error) => {
//             console.error("Error canceling reservation:", error);
//             alert("Failed to cancel the request. Please try again.");
//           },
//         });
//     }
//   }
// }
