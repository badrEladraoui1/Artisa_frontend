import { Component, Output, EventEmitter, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  ServiceDTO,
  ServiceResponseDTO,
} from "../../../../models/service.model";

@Component({
  selector: "app-add-service-modal",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./add-service-modal.component.html",
})
export class AddServiceModalComponent implements OnInit {
  @Input() editMode = false;
  @Input() service?: ServiceResponseDTO;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<ServiceDTO>();

  serviceForm: FormGroup;
  selectedFile?: File;

  constructor(private fb: FormBuilder) {
    this.serviceForm = this.fb.group({
      titre: ["", Validators.required],
      description: ["", Validators.required],
      tarif: ["", [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    if (this.service && this.editMode) {
      this.serviceForm.patchValue({
        titre: this.service.titre,
        description: this.service.description,
        tarif: this.service.tarif,
      });
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  // onSubmit() {
  //   if (this.serviceForm.valid) {
  //     const serviceData: ServiceDTO = {
  //       titre: this.serviceForm.value.titre,
  //       description: this.serviceForm.value.description,
  //       tarif: Number(this.serviceForm.value.tarif),
  //       servicePicture: this.selectedFile,
  //     };

  //     this.save.emit(serviceData);
  //   }
  // }
  async onSubmit() {
    if (this.serviceForm.valid) {
      const serviceData: ServiceDTO = {
        titre: this.serviceForm.value.titre,
        description: this.serviceForm.value.description,
        tarif: Number(this.serviceForm.value.tarif),
        servicePicture: this.selectedFile,
      };

      try {
        await this.save.emit(serviceData);

        // Add a delay before reloading the page
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Reload the page
        window.location.reload();
      } catch (error) {
        console.error("Error saving service:", error);
      }
    }
  }
}
