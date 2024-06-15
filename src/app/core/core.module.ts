import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Constants } from './models/constants';
import { ApiHttpService } from './services/api-http.service';
import { UrlBuilderService } from './services/url-builder.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [Constants, ApiHttpService, UrlBuilderService],
})
export class CoreModule {}
