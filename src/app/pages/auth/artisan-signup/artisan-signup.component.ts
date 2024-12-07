import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { AuthService } from "../../../components/services/auth.service";

@Component({
  selector: "app-artisan-signup",
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: "./artisan-signup.component.html",
})
export class ArtisanSignupComponent {
  signupForm: FormGroup;
  errorMessage: string = "";
  successMessage: string = "";
  isLoading: boolean = false;
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group(
      {
        nomComplet: ["", [Validators.required, Validators.minLength(2)]],
        email: ["", [Validators.required, Validators.email]],
        phone: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
        metier: ["", Validators.required],
        description: ["", [Validators.required, Validators.minLength(30)]],
        address: ["", Validators.required],
        motDePasse: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required],
        terms: [false, Validators.requiredTrue],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get("motDePasse")?.value === g.get("confirmPassword")?.value
      ? null
      : { mismatch: true };
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.match(/^image\/(png|jpeg|jpg)$/)) {
        this.errorMessage = "Please select a valid image file (PNG or JPEG)";
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        this.errorMessage = "File size should not exceed 5MB";
        return;
      }

      this.selectedFile = file;
      this.errorMessage = ""; // Clear any previous error messages

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  removeFile() {
    this.selectedFile = null;
    this.previewUrl = null;
    // Clear the file input
    const fileInput = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoading = true;
      this.errorMessage = "";
      this.successMessage = "";

      const formData = new FormData();

      // Add form fields
      Object.keys(this.signupForm.value).forEach((key) => {
        if (key !== "confirmPassword" && key !== "terms") {
          formData.append(key, this.signupForm.get(key)?.value);
        }
      });

      // Add profile picture only if one was selected
      if (this.selectedFile) {
        formData.append("profilePicture", this.selectedFile);
      }

      this.authService.signupArtisan(formData).subscribe({
        next: (response) => {
          this.successMessage = "Registration successful! You can now login.";
          setTimeout(() => {
            this.router.navigate(["/login"], {
              queryParams: {
                registered: "true",
                type: "artisan",
              },
            });
          }, 2000);
        },
        error: (error) => {
          if (error.status === 200) {
            this.successMessage = "Registration successful! You can now login.";
            setTimeout(() => {
              this.router.navigate(["/login"], {
                queryParams: {
                  registered: "true",
                  type: "artisan",
                },
              });
            }, 2000);
          } else {
            this.errorMessage =
              error.error?.message || "Registration failed. Please try again.";
          }
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
}
