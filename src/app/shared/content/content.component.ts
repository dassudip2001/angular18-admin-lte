import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { MainSidedarComponent } from '../main-sidedar/main-sidedar.component';

@Component({
  selector: 'app-content',
  standalone: true,
  template: `
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
  imports: [RouterOutlet, MainHeaderComponent, MainSidedarComponent],
})
export class ContentComponent {}
