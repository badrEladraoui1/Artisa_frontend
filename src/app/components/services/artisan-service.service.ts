import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ServiceDTO, ServiceResponseDTO } from "../../models/service.model";

@Injectable({
  providedIn: "root",
})
export class ArtisanServiceService {
  private baseUrl = "http://localhost:8080/api/services";

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    return new HttpHeaders().set("Authorization", `Bearer ${token}`);
  }

  getArtisanServices(artisanId: number): Observable<ServiceResponseDTO[]> {
    return this.http.get<ServiceResponseDTO[]>(
      `${this.baseUrl}/artisan/${artisanId}`,
      { headers: this.getHeaders() }
    );
  }

  createService(serviceData: ServiceDTO): Observable<string> {
    const formData = new FormData();
    formData.append("titre", serviceData.titre);
    formData.append("description", serviceData.description);
    formData.append("tarif", serviceData.tarif.toString());
    if (serviceData.servicePicture) {
      formData.append("servicePicture", serviceData.servicePicture);
    }

    // Don't set Content-Type header when sending FormData
    const headers = this.getHeaders();
    return this.http.post<string>(`${this.baseUrl}/create`, formData, {
      headers,
    });
  }

  updateService(
    serviceId: number,
    serviceData: ServiceDTO
  ): Observable<string> {
    const formData = new FormData();
    formData.append("titre", serviceData.titre);
    formData.append("description", serviceData.description);
    formData.append("tarif", serviceData.tarif.toString());
    if (serviceData.servicePicture) {
      formData.append("servicePicture", serviceData.servicePicture);
    }

    // Don't set Content-Type header when sending FormData
    const headers = this.getHeaders();
    return this.http.put<string>(
      `${this.baseUrl}/${serviceId}/update`,
      formData,
      { headers }
    );
  }

  deleteService(serviceId: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${serviceId}/delete`, {
      headers: this.getHeaders(),
    });
  }
}
