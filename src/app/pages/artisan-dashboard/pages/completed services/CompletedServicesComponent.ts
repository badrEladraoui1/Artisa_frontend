import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReviewDto } from "../../../../models/reservation.model";
import { ReservationService } from "../../../../components/services/reservation.service";
import { AuthService } from "../../../../components/services/auth.service";

@Component({
  selector: "app-artisan-completed-services",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./CompletedServicesComponent.html",
})
export class CompletedServicesComponentForArtisan implements OnInit {
  completedReviews: ReviewDto[] = [];
  isLoading = true;
  averageRating = 0;
  ratingCounts = [0, 0, 0, 0, 0]; // Counts for 1, 2, 3, 4, 5 star ratings

  constructor(
    private reservationService: ReservationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.loadCompletedServicesWithReviews(currentUser.id);
    }
  }

  loadCompletedServicesWithReviews(artisanId: number) {
    this.isLoading = true;

    this.reservationService
      .getArtisanCompletedReviewedReservations(artisanId)
      .subscribe({
        next: (data) => {
          this.completedReviews = data;
          this.calculateRatingStatistics();
          this.isLoading = false;
        },
        error: (error) => {
          console.error(
            "Error loading completed services with reviews:",
            error
          );
          this.isLoading = false;
        },
      });
  }

  calculateRatingStatistics() {
    // Reset rating counts
    this.ratingCounts = [0, 0, 0, 0, 0];

    // Calculate average rating and rating distribution
    if (this.completedReviews.length > 0) {
      const totalRating = this.completedReviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      this.averageRating = totalRating / this.completedReviews.length;

      // Count ratings
      this.completedReviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
          this.ratingCounts[5 - review.rating]++;
        }
      });
    }
  }
}
