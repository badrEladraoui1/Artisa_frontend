import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRequestsComponent } from '../../components/client-requests/client-requests.component';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CommonModule, ClientRequestsComponent],
  template: `
    <app-client-requests></app-client-requests>
  `
})
export class RequestsComponent {}