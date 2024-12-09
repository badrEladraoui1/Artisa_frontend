import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";
import { ArtisanDetail, ArtisanDisplay } from "../../models/artisan.model";

@Injectable({
  providedIn: "root",
})
export class ArtisanService {
  private readonly apiUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) {}

  // getAllArtisans(): Observable<ArtisanDisplay[]> {
  //   return this.http.get<ArtisanDisplay[]>(`${this.apiUrl}/artisans/all`);
  // }

  getArtisanDetails(artisanId: number): Observable<ArtisanDetail> {
    return this.http.get<ArtisanDetail>(
      `${this.apiUrl}/artisans/${artisanId}/details`
    );
  }

  getAllArtisans(): Observable<ArtisanDisplay[]> {
    return this.http.get<ArtisanDisplay[]>(`${this.apiUrl}/artisans/all`).pipe(
      map((artisans) =>
        artisans.map((artisan) => ({
          ...artisan,
          profilePictureUrl: artisan.profilePictureFileName
            ? `${this.apiUrl}/images/profile-pictures/${artisan.profilePictureFileName}`
            : "/default-profile.jpg",
        }))
      )
    );
  }

  // In your ArtisanService
  getProfilePicture(artisanId: number): Observable<string | Blob> {
    return this.http
      .get(`${this.apiUrl}/artisans/${artisanId}/profile-picture`, {
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

  // getProfilePicture(artisanId: number): Observable<Blob> {
  //   return this.http.get(
  //     `${this.apiUrl}/artisans/${artisanId}/profile-picture`,
  //     {
  //       responseType: "blob",
  //     }
  //   );
  // }

  updateProfile(id: number, profileData: any): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/${id}/profile`, profileData, {
        responseType: "text", // Expect text response
        observe: "response", // Get full response
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return {
              success: true,
              message: response.body || "Profile updated successfully",
            };
          }
          throw new Error("Update failed");
        })
      );
  }
}
