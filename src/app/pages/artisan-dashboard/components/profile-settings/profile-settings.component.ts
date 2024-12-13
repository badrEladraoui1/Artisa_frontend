import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ArtisanService } from "../../../../components/services/auth.artisanService";
import { AuthService } from "../../../../components/services/auth.service";

@Component({
  selector: "app-profile-settings",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./profile-settings.component.html",
})
export class ProfileSettingsComponent implements OnInit {
  profileForm: FormGroup;
  successMessage: string = "";
  errorMessage: string = "";
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private artisanService: ArtisanService
  ) {
    this.profileForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      address: ["", Validators.required], // Added address field
    });
  }

  ngOnInit() {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.profileForm.patchValue({
        name: currentUser.nomComplet,
        email: currentUser.email,
        phone: currentUser.phone,
        address: currentUser.adresse, // Added address
      });
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.isLoading = true;
      this.successMessage = "";
      this.errorMessage = "";

      const currentUser = this.authService.currentUserValue;
      if (!currentUser?.id) {
        this.errorMessage = "User information not found";
        this.isLoading = false;
        return;
      }

      const profileData = {
        nomComplet: this.profileForm.get("name")?.value,
        email: this.profileForm.get("email")?.value,
        phone: this.profileForm.get("phone")?.value,
        address: this.profileForm.get("address")?.value, // Using form value now
      };

      this.artisanService.updateProfile(currentUser.id, profileData).subscribe({
        next: () => {
          this.successMessage = "Profile updated successfully!";
          this.isLoading = false;
        },
        error: (error: any) => {
          this.errorMessage =
            error.error?.message || "Failed to update profile";
          this.isLoading = false;
        },
      });
    }
  }
}
