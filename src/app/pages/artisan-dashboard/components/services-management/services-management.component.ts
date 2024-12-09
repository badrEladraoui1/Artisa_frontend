import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceCardComponent } from "./service-card.component";
import { AddServiceModalComponent } from "./add-service-modal.component";
import { firstValueFrom } from "rxjs";

import {
  ServiceDTO,
  ServiceResponseDTO,
} from "../../../../models/service.model";
import { ArtisanServiceService } from "../../../../components/services/artisan-service.service";
import { AuthService } from "../../../../components/services/auth.service";

@Component({
  selector: "app-services-management",
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, AddServiceModalComponent],
  templateUrl: "./services-management.component.html",
})
export class ServicesManagementComponent implements OnInit {
  services: ServiceResponseDTO[] = [];
  showAddServiceModal = false;
  showEditModal = false;
  selectedService?: ServiceResponseDTO;

  constructor(
    private artisanService: ArtisanServiceService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.id) {
      this.artisanService.getArtisanServices(currentUser.id).subscribe({
        next: (services) => {
          this.services = services;
        },
        error: (error) => {
          console.error("Error loading services:", error);
        },
      });
    }
  }

  closeModal() {
    this.showAddServiceModal = false;
    this.showEditModal = false;
    this.selectedService = undefined;
  }

  onEditService(service: ServiceResponseDTO) {
    this.selectedService = service;
    this.showEditModal = true;
  }

  // onDeleteService(serviceId: number) {
  //   if (confirm("Are you sure you want to delete this service?")) {
  //     this.artisanService.deleteService(serviceId).subscribe({
  //       next: () => {
  //         this.loadServices();
  //         this.reloadPage();
  //       },
  //       error: (error) => {
  //         console.error("Error deleting service:", error);
  //       },
  //     });
  //   }
  // }

  // reloadPage() {
  //   // Use setTimeout to delay the page reload
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 4000);
  // }

  onDeleteService(serviceId: number) {
    if (confirm("Are you sure you want to delete this service?")) {
      this.artisanService.deleteService(serviceId).subscribe({
        next: () => {
          this.loadServices();
          window.location.reload();
        },
        error: (error) => {
          console.error("Error deleting service:", error);
        },
      });
    }
  }

  onSaveService(serviceData: ServiceDTO) {
    if (this.showEditModal && this.selectedService) {
      this.artisanService
        .updateService(this.selectedService.id!, serviceData)
        .subscribe({
          next: () => {
            this.loadServices();
            this.closeModal();
            window.location.reload();
          },
          error: (error) => {
            console.error("Error updating service:", error);
          },
        });
    } else {
      this.artisanService.createService(serviceData).subscribe({
        next: () => {
          this.loadServices();
          this.closeModal();
          window.location.reload();
        },
        error: (error) => {
          console.error("Error creating service:", error);
        },
      });
    }
  }
}
