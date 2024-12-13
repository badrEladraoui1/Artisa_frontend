import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceResponseDTO } from "../../../../models/service.model";

@Component({
  selector: "app-service-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./service-card.component.html",
})
export class ServiceCardComponent {
  @Input() service!: ServiceResponseDTO;
  @Output() edit = new EventEmitter<ServiceResponseDTO>();
  @Output() delete = new EventEmitter<number>();
}
