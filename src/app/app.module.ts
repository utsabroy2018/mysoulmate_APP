import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppInterceptorInterceptor } from './Interceptors/app-interceptor.interceptor';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DatePipe } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AuthGuard } from './guard/auth.guard';
import { SecrectDataService } from './Services/SecrectData.service';
import { PlatformModule } from '@angular/cdk/platform';


// import {MatChipsModule} from '@angular/material/chips';
// import { ScrollDirective } from './Directives/scroll.directive';
// import {FileUploadModule} from 'primeng/fileupload';

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PlatformModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    // MatChipsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    
  ],
  providers: [
    SecrectDataService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptorInterceptor, multi: true },
    DatePipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
