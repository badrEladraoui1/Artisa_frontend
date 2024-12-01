import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServicesManagementComponent } from "../../components/services-management/services-management.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule, ServicesManagementComponent, RouterModule],
  template: ` <app-services-management></app-services-management> `,
})
export class ServicesComponent {}
