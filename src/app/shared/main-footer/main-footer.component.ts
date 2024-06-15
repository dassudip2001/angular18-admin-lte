import { Component } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [],
  template: `
    <!-- Main Footer -->
    <footer class="main-footer">
      <strong>Copyright &copy; 2014-2021 <a href="#">Sudip Das</a>.</strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.2.0
      </div>
    </footer>
  `,
  styles: ``,
})
export class MainFooterComponent {}
