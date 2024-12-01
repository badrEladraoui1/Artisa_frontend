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

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoading = true;
      this.errorMessage = "";
      this.successMessage = "";

      const formData = {
        nomComplet: this.signupForm.get("nomComplet")?.value,
        email: this.signupForm.get("email")?.value,
        phone: this.signupForm.get("phone")?.value,
        metier: this.signupForm.get("metier")?.value,
        description: this.signupForm.get("description")?.value,
        address: this.signupForm.get("address")?.value,
        motDePasse: this.signupForm.get("motDePasse")?.value,
      };

      this.authService.signupArtisan(formData).subscribe({
        next: (response) => {
          if (response.success) {
            this.successMessage = response.message;
            setTimeout(() => {
              this.router.navigate(["/login"], {
                queryParams: {
                  registered: "true",
                  type: "artisan",
                },
              });
            }, 2000);
          }
        },
        error: (error) => {
          console.error("Signup failed", error);
          // If it's a 200 status but parsing failed, it's actually a success
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

  // onSubmit() {
  //   if (this.signupForm.valid) {
  //     this.isLoading = true;
  //     this.errorMessage = "";
  //     this.successMessage = "";

  //     const formData = {
  //       nomComplet: this.signupForm.get("nomComplet")?.value,
  //       email: this.signupForm.get("email")?.value,
  //       phone: this.signupForm.get("phone")?.value,
  //       metier: this.signupForm.get("metier")?.value,
  //       description: this.signupForm.get("description")?.value,
  //       address: this.signupForm.get("address")?.value,
  //       motDePasse: this.signupForm.get("motDePasse")?.value,
  //     };

  //     this.authService.signupArtisan(formData).subscribe({
  //       next: (response) => {
  //         if (response.success) {
  //           this.successMessage = response.message;
  //           // Wait for 2 seconds before redirecting
  //           setTimeout(() => {
  //             this.router.navigate(["/login"], {
  //               queryParams: {
  //                 registered: "true",
  //                 type: "artisan",
  //               },
  //             });
  //           }, 2000);
  //         } else {
  //           this.errorMessage = "Something went wrong. Please try again.";
  //         }
  //       },
  //       error: (error) => {
  //         console.error("Signup failed", error);
  //         if (error.status === 400 && error.error?.message) {
  //           this.errorMessage = error.error.message;
  //         } else {
  //           this.errorMessage = "Registration failed. Please try again.";
  //         }
  //         this.isLoading = false;
  //       },
  //       complete: () => {
  //         this.isLoading = false;
  //       },
  //     });
  //   }
  // }
}
