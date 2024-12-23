// services/payment.service.ts
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  PaymentRequestDto,
  PaymentResponseDto,
} from "../../models/payment.model";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  private apiUrl = "http://localhost:8080/api/transactions";

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    return new HttpHeaders().set("Authorization", `Bearer ${token}`);
  }

  processPayment(
    paymentData: PaymentRequestDto
  ): Observable<PaymentResponseDto> {
    return this.http.post<PaymentResponseDto>(
      `${this.apiUrl}/process`,
      paymentData,
      { headers: this.getHeaders() }
    );
  }

  getTransactionsByReservation(
    reservationId: number
  ): Observable<PaymentResponseDto[]> {
    return this.http.get<PaymentResponseDto[]>(
      `${this.apiUrl}/reservation/${reservationId}`,
      { headers: this.getHeaders() }
    );
  }
}
