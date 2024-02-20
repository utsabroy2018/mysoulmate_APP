import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Otp_loginComponent } from './otp_login.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Before_login_header_N_HomeModule } from '../../Before_login_header_N_Home/Before_login_header_N_Home.module';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
// import { OnlyNumberDirective } from 'src/app/Directives/only-number.directive';
import { NgOtpInputModule } from 'ng-otp-input';
import { After_login_header_GlobalModule } from '../../after_login_header_Global/after_login_header_Global.module';

const router: Routes = [
  {
    path: '',
    component: Otp_loginComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    Before_login_header_N_HomeModule,
    After_login_header_GlobalModule,
    NgOtpInputModule,
    RouterModule.forChild(router)
  ],
  // declarations: [Otp_loginComponent, OnlyNumberDirective]
  declarations: [Otp_loginComponent]

})
export class Otp_loginModule { }
