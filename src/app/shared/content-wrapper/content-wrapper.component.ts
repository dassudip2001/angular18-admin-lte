import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { MainSidedarComponent } from '../main-sidedar/main-sidedar.component';
import { ContentComponent } from '../content/content.component';
import { MainFooterComponent } from '../main-footer/main-footer.component';

@Component({
  selector: 'app-content-wrapper',
  standalone: true,
  template: `
    <div class="wrapper">
      <app-main-header></app-main-header>
      <app-main-sidedar></app-main-sidedar>
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- /.content -->
        <app-content></app-content>
      </div>
      <app-main-footer></app-main-footer>
    </div>
  `,
  styles: ``,
  imports: [
    MainHeaderComponent,
    MainSidedarComponent,
    ContentComponent,
    MainFooterComponent,
  ],
})
export class ContentWrapperComponent {}
