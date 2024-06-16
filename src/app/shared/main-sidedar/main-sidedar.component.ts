import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-sidedar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link">
        <img
          src=""
          alt=""
          class="brand-image img-circle elevation-3"
          style="opacity: .8" />
        <span class="brand-text font-weight-light">CMS</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <!-- <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="dist/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
          </div>
        </div> -->

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
            <li class="nav-item">
              <a
                href="pages/widgets.html"
                class="nav-link"
                [routerLink]="['/cms/dashboard']"
                routerLinkActive="active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item menu-open">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-gear"></i>
                <p>
                  Configuration
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    [routerLink]="['/cms/configuration/roles']"
                    routerLinkActive="active">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Role</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    [routerLink]="['/cms/configuration/permissions']"
                    routerLinkActive="active">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Permission</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    [routerLink]="['/cms/configuration/users']"
                    routerLinkActive="active">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Users</p>
                  </a>
                </li>
              </ul>
            </li>
            <!-- content -->
            <li class="nav-item">
              <a routerLink="/cms/contents" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>Contents</p>
              </a>
            </li>
            <!-- end  -->
            <!-- Logs -->
            <li class="nav-item">
              <a routerLink="/cms/logs" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>Logs</p>
              </a>
            </li>
            <!-- end Logs -->
            <li class="nav-item">
              <a routerLink="/cms/logs" class="nav-link">
                <i class=" nav-icon fa-solid fa-right-from-bracket"></i>
                <p>Log Out</p>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  `,
  styles: ``,
})
export class MainSidedarComponent {}
