import { Injectable } from "@angular/core";
import {
  CreateReservationDto,
  ReservationResponseDto,
} from "../../models/reservation.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";

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

  createReservation(
    data: CreateReservationDto
  ): Observable<ReservationResponseDto> {
    return this.http.post<ReservationResponseDto>(this.apiUrl, data, {
      headers: this.getHeaders(),
    });
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
      `${this.apiUrl}/status?userId=${userId}&status=${status}`
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

  updateReservationStatus(
    reservationId: number,
    status: string,
    notes?: string
  ): Observable<ReservationResponseDto> {
    return this.http.put<ReservationResponseDto>(
      `${this.apiUrl}/${reservationId}/status`,
      { status, notes },
      { headers: this.getHeaders() }
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
