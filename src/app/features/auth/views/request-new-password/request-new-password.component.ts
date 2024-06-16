import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-request-new-password',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './request-new-password.component.html',
  styleUrl: './request-new-password.component.scss',
})
export class RequestNewPasswordComponent {}
