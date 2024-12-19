import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthService } from "../../../components/services/auth.service";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-client-signup",
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: "./client-signup.component.html",
})
export class ClientSignupComponent {
  signupForm: FormGroup;
  errorMessage: string = "";
  isLoading: boolean = false;
  successMessage: string = "";
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      nomComplet: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      motDePasse: ["", [Validators.required, Validators.minLength(8)]],
      address: ["", Validators.required],
      terms: [false, Validators.requiredTrue],
    });
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
      formData.append("nomComplet", this.signupForm.get("nomComplet")?.value);
      formData.append("email", this.signupForm.get("email")?.value);
      formData.append("phone", this.signupForm.get("phone")?.value);
      formData.append("address", this.signupForm.get("address")?.value);
      formData.append("motDePasse", this.signupForm.get("motDePasse")?.value);

      if (this.selectedFile) {
        formData.append("profilePicture", this.selectedFile);
      }

      this.authService.signupClient(formData).subscribe({
        next: (response) => {
          if (response.success) {
            this.successMessage = response.message;
            setTimeout(() => {
              this.router.navigate(["/login"], {
                queryParams: { registered: "true", type: "client" },
              });
            }, 2000);
          }
        },
        error: (error) => {
          if (error.status === 200) {
            this.successMessage = "Registration successful! You can now login.";
            setTimeout(() => {
              this.router.navigate(["/login"], {
                queryParams: { registered: "true", type: "client" },
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

// import { Component } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { RouterModule, Router } from "@angular/router";
// import {
//   FormBuilder,
//   FormGroup,
//   Validators,
//   ReactiveFormsModule,
// } from "@angular/forms";
// import { AuthService } from "../../../components/services/auth.service";
// @Component({
//   selector: "app-client-signup",
//   standalone: true,
//   imports: [CommonModule, RouterModule, ReactiveFormsModule],
//   templateUrl: "./client-signup.component.html",
// })
// export class ClientSignupComponent {
//   signupForm: FormGroup;
//   errorMessage: string = "";
//   isLoading: boolean = false;
//   successMessage: string = "";

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {
//     this.signupForm = this.fb.group({
//       nomComplet: ["", [Validators.required, Validators.minLength(2)]],
//       email: ["", [Validators.required, Validators.email]],
//       phone: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
//       motDePasse: ["", [Validators.required, Validators.minLength(8)]],
//       address: ["", Validators.required],
//       terms: [false, Validators.requiredTrue],
//     });
//   }

//   onSubmit() {
//     if (this.signupForm.valid) {
//       this.isLoading = true;
//       this.errorMessage = "";
//       this.successMessage = "";

//       const formData = {
//         nomComplet: this.signupForm.get("nomComplet")?.value,
//         email: this.signupForm.get("email")?.value,
//         phone: this.signupForm.get("phone")?.value,
//         address: this.signupForm.get("address")?.value,
//         motDePasse: this.signupForm.get("motDePasse")?.value,
//       };

//       this.authService.signupClient(formData).subscribe({
//         next: (response) => {
//           if (response.success) {
//             // Show success message
//             this.successMessage = response.message;

//             // Navigate after a short delay
//             setTimeout(() => {
//               this.router.navigate(["/login"], {
//                 queryParams: {
//                   registered: "true",
//                   type: "client",
//                 },
//               });
//             }, 2000);
//           }
//         },
//         error: (error) => {
//           console.error("Signup failed", error);
//           // If it's a 200 status but parsing failed, it's actually a success
//           if (error.status === 200) {
//             this.successMessage = "Registration successful! You can now login.";
//             setTimeout(() => {
//               this.router.navigate(["/login"], {
//                 queryParams: {
//                   registered: "true",
//                   type: "client",
//                 },
//               });
//             }, 2000);
//           } else {
//             setTimeout(() => {
//               this.errorMessage =
//                 error.error?.message ||
//                 "Registration failed. Please try again.";
//             }, 2000);
//           }
//           this.isLoading = false;
//         },
//         complete: () => {
//           this.isLoading = false;
//         },
//       });
//     }
//   }
// }
