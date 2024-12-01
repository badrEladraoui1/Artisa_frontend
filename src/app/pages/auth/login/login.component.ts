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
    // Redirect if already logged in
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/dashboard"]);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { nomComplet, motDePasse } = this.loginForm.value;

      this.authService.login(nomComplet, motDePasse).subscribe({
        next: (response) => {
          console.log("Login successful:", response);

          // Check user role and navigate accordingly
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
          console.error("Login failed:", error);
          // You might want to show a more user-friendly error message
          alert("Login failed. Please check your credentials and try again.");
        },
      });
    }
  }
}
