import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { jwtDecode } from "jwt-decode";
import {
  DecodedToken,
  SignUpDtoArtisan,
  SignUpDtoClient,
} from "../models/auth.models";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "http://localhost:8080/api/auth"; // Replace with your actual API URL
  private currentUserSubject: BehaviorSubject<DecodedToken | null>;
  public currentUser: Observable<DecodedToken | null>;

  constructor(private http: HttpClient) {
    const storedToken = localStorage.getItem("access_token");
    this.currentUserSubject = new BehaviorSubject<DecodedToken | null>(
      storedToken ? this.decodeToken(storedToken) : null
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  signupClient(data: any): Observable<any> {
    // Use observe: 'response' to get the full HTTP response
    return this.http
      .post(`${this.apiUrl}/signup/client`, data, {
        observe: "response",
        responseType: "text", // Handle response as text instead of JSON
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return {
              success: true,
              message: "Registration successful! You can now login.",
            };
          }
          throw new Error("Registration failed");
        })
      );
  }

  // signupArtisan(data: any): Observable<any> {
  //   return this.http
  //     .post(`${this.apiUrl}/signup/artisan`, data, {
  //       observe: "response",
  //       responseType: "text",
  //     })
  //     .pipe(
  //       map((response: HttpResponse<any>) => {
  //         if (response.status === 200) {
  //           return {
  //             success: true,
  //             message: "Registration successful! You can now login.",
  //           };
  //         }
  //         throw new Error("Registration failed");
  //       })
  //     );
  // }

  signupArtisan(formData: FormData): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/signup/artisan`, formData, {
        observe: "response",
        responseType: "text",
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return {
              success: true,
              message:
                response.body || "Registration successful! You can now login.",
            };
          }
          throw new Error("Registration failed");
        })
      );
  }

  login(nomComplet: string, motDePasse: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { nomComplet, motDePasse })
      .pipe(
        map((response) => {
          // Store the token
          localStorage.setItem("access_token", response.accessToken);

          // Decode and store user information
          const decodedToken = this.decodeToken(response.accessToken);
          this.currentUserSubject.next(decodedToken);

          return response;
        })
      );
  }

  decodeToken(token: string): DecodedToken {
    try {
      return jwtDecode<DecodedToken>(token);
    } catch (error) {
      console.error("Error decoding token", error);
      this.logout();
      throw error;
    }
  }

  logout() {
    // Remove token from local storage
    localStorage.removeItem("access_token");
    // Reset the current user subject
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): DecodedToken | null {
    return this.currentUserSubject.value;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    const token = localStorage.getItem("access_token");
    if (!token) return false;

    // Optional: Check if token is expired
    const decoded = this.decodeToken(token);
    return decoded.exp > Date.now() / 1000;
  }

  // Check if user has a specific role
  hasRole(role: string): boolean {
    const currentUser = this.currentUserValue;
    return currentUser ? currentUser.roles.includes(role) : false;
  }
}
