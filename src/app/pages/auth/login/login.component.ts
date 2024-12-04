import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../../components/services/auth.service";
import { Router, RouterModule } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = "";
  showError: boolean = false;
  isLoading: boolean = false;
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  constructor() {
    this.loginForm = this.fb.group({
      nomComplet: ["", [Validators.required]],
      motDePasse: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/dashboard"]);
    }
  }

  showErrorMessage(message: string) {
    this.errorMessage = message;
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
      this.errorMessage = "";
    }, 3000);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { nomComplet, motDePasse } = this.loginForm.value;

      this.authService.login(nomComplet, motDePasse).subscribe({
        next: (response) => {
          const user = this.authService.currentUserValue;
          if (user?.roles.includes("ARTISAN")) {
            this.router.navigate(["artisan/dashboard/page"]);
          } else if (user?.roles.includes("CLIENT")) {
            this.router.navigate(["/client/dashboard/page"]);
          } else if (user?.roles.includes("ADMIN")) {
            this.router.navigate(["/admin/dashboard/page"]);
          } else {
            this.router.navigate(["/dashboard"]);
          }
        },
        error: (error) => {
          let errorMsg =
            "Login failed. Please check your credentials and try again.";
          if (error.error?.message) {
            errorMsg = error.error.message;
          }
          this.showErrorMessage(errorMsg);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
}
