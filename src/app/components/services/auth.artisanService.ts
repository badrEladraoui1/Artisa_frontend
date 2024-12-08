import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ArtisanService {
  private readonly apiUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) {}

  getProfilePicture(artisanId: number): Observable<Blob> {
    return this.http.get(
      `${this.apiUrl}/artisans/${artisanId}/profile-picture`,
      {
        responseType: "blob",
      }
    );
  }

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
