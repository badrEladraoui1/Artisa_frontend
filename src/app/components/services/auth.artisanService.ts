import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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

  //   // Add other artisan-related methods here
  //   getArtisanStats(artisanId: number): Observable<any> {
  //     return this.http.get(`${this.apiUrl}/artisans/${artisanId}/stats`);
  //   }
}
