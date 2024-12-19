// src/app/components/services/auth.clientService.ts
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private readonly apiUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) {}

  getProfilePicture(clientId: number): Observable<string | Blob> {
    return this.http
      .get(`${this.apiUrl}/clients/${clientId}/profile-picture`, {
        responseType: "blob",
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            return of("/default-profile.jpg");
          }
          throw error;
        })
      );
  }
}

// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Observable, of } from "rxjs";
// import { catchError } from "rxjs/operators";

// @Injectable({
//   providedIn: "root",
// })
// export class ClientService {
//   private apiUrl = "http://localhost:8080/api"; // Your API base URL

//   constructor(private http: HttpClient) {}

//   getProfilePicture(clientId: number): Observable<Blob | string> {
//     return this.http
//       .get(`${this.apiUrl}/clients/${clientId}/profile-picture`, {
//         responseType: "blob",
//       })
//       .pipe(
//         catchError(() => {
//           return of("/default-profile.jpg");
//         })
//       );
//   }

//   // Add other client-specific methods here
// }
