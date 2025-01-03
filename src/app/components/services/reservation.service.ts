import { Injectable } from "@angular/core";
import {
  CompletionConfirmationResponse,
  CreateReservationDto,
  ReservationResponseDto,
  ReservationStatus,
  ReviewDto,
  UpdateReservationStatusDto,
} from "../../models/reservation.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";
import { toISOStringOrUndefined } from "../../utils/date.utils";

@Injectable({
  providedIn: "root",
})
export class ReservationService {
  private apiUrl = "http://localhost:8080/api/reservations";

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    return new HttpHeaders().set("Authorization", `Bearer ${token}`);
  }

  confirmCompletion(
    reservationId: number,
    userType: "CLIENT" | "ARTISAN"
  ): Observable<CompletionConfirmationResponse> {
    return this.http
      .post<CompletionConfirmationResponse>(
        `${
          this.apiUrl
        }/${reservationId}/confirm-completion/${userType.toLowerCase()}`,
        {},
        { headers: this.getHeaders() }
      )
      .pipe(
        tap((response) =>
          console.log(`${userType} confirmation response:`, response)
        ),
        catchError((error) => {
          console.error(`Error during ${userType} confirmation:`, error);
          return throwError(() => error);
        })
      );
  }

  getArtisanCompletedReviewedReservations(
    artisanId: number
  ): Observable<ReviewDto[]> {
    return this.http.get<ReviewDto[]>(
      `${this.apiUrl}/artisan/${artisanId}/completed-reviews`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  // submitReview(
  //   reservationId: number,
  //   review: { rating: number; comment: string }
  // ): Observable<any> {
  //   return this.http
  //     .post(`${this.apiUrl}/${reservationId}/review`, review, {
  //       headers: this.getHeaders(),
  //     })
  //     .pipe(
  //       tap((response) => console.log("Review submitted:", response)),
  //       catchError((error) => {
  //         console.error("Error submitting review:", error);
  //         return throwError(() => error);
  //       })
  //     );
  // }

  // In your service
  submitReview(
    reservationId: number,
    review: { rating: number; comment: string }
  ): Observable<any> {
    return this.http
      .post(
        `${this.apiUrl}/${reservationId}/review`,
        {
          reservationId: reservationId,
          rating: review.rating,
          comment: review.comment,
        },
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        tap((response) => console.log("Review submitted:", response)),
        catchError((error) => {
          console.error("Error submitting review:", error);
          return throwError(() => error);
        })
      );
  }

  createReservation(
    data: CreateReservationDto
  ): Observable<ReservationResponseDto> {
    // Safely convert the date to ISO string

    const formattedData = {
      ...data,
      proposedCompletionDate: toISOStringOrUndefined(
        data.proposedCompletionDate
      ),
    };

    return this.http
      .post<ReservationResponseDto>(this.apiUrl, formattedData, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap((response) => console.log("Reservation created:", response)),
        catchError((error) => {
          console.error("Error creating reservation:", error);
          return throwError(() => error);
        })
      );
  }

  getClientReservations(
    clientId: number
  ): Observable<ReservationResponseDto[]> {
    return this.http.get<ReservationResponseDto[]>(
      `${this.apiUrl}/client/${clientId}`,
      { headers: this.getHeaders() }
    );
  }

  getArtisanReservations(
    artisanId: number
  ): Observable<ReservationResponseDto[]> {
    console.log("Fetching reservations for artisan:", artisanId);
    return this.http
      .get<ReservationResponseDto[]>(`${this.apiUrl}/artisan/${artisanId}`, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap((response) => console.log("API Response:", response)),
        catchError((error) => {
          console.error("API Error:", error);
          return throwError(() => error);
        })
      );
  }

  getReservationsByStatus(
    userId: number,
    status: string
  ): Observable<ReservationResponseDto[]> {
    return this.http.get<ReservationResponseDto[]>(
      `${this.apiUrl}/status?userId=${userId}&status=${status}`,
      { headers: this.getHeaders() }
    );
  }

  getClientSuggestedByArtisandReservations(
    clientId: number
  ): Observable<ReservationResponseDto[]> {
    return this.http.get<ReservationResponseDto[]>(
      `${this.apiUrl}/client/${clientId}/suggested_by_artisan`,
      { headers: this.getHeaders() }
    );
  }

  getClientInProgressReservations(
    clientId: number
  ): Observable<ReservationResponseDto[]> {
    return this.http.get<ReservationResponseDto[]>(
      `${this.apiUrl}/client/${clientId}/inprogress`,
      { headers: this.getHeaders() }
    );
  }

  getClientCompletedReservations(
    clientId: number
  ): Observable<ReservationResponseDto[]> {
    return this.http.get<ReservationResponseDto[]>(
      `${this.apiUrl}/client/${clientId}/completed`,
      { headers: this.getHeaders() }
    );
  }

  getClientCanceledReservations(
    clientId: number
  ): Observable<ReservationResponseDto[]> {
    return this.http.get<ReservationResponseDto[]>(
      `${this.apiUrl}/client/${clientId}/canceled`,
      { headers: this.getHeaders() }
    );
  }

  getClientAcceptedReservations(
    clientId: number
  ): Observable<ReservationResponseDto[]> {
    return this.http.get<ReservationResponseDto[]>(
      `${this.apiUrl}/client/${clientId}/accepted`,
      { headers: this.getHeaders() }
    );
  }

  updateReservationStatus(
    reservationId: number,
    status: ReservationStatus,
    notes?: string,
    proposedCompletionDate?: Date
  ): Observable<ReservationResponseDto> {
    const updateData: UpdateReservationStatusDto = {
      status,
      notes,
      proposedCompletionDate: proposedCompletionDate
        ? proposedCompletionDate.toISOString()
        : undefined,
    };

    return this.http
      .put<ReservationResponseDto>(
        `${this.apiUrl}/${reservationId}/status`,
        updateData,
        { headers: this.getHeaders() }
      )
      .pipe(
        tap((response) => console.log("Status updated:", response)),
        catchError((error) => {
          console.error("Error updating status:", error);
          return throwError(() => error);
        })
      );
  }

  getReservationById(
    reservationId: number
  ): Observable<ReservationResponseDto> {
    return this.http.get<ReservationResponseDto>(
      `${this.apiUrl}/${reservationId}`,
      { headers: this.getHeaders() }
    );
  }
}
