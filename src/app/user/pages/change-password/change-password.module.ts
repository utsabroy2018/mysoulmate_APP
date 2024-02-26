import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { RouterModule, Routes } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Before_login_header_N_HomeModule } from '../../Before_login_header_N_Home/Before_login_header_N_Home.module';
import { After_login_header_GlobalModule } from '../../after_login_header_Global/after_login_header_Global.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderResponsiveModule } from '../../headerResponsive/headerResponsive.module';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    Before_login_header_N_HomeModule,
    After_login_header_GlobalModule,
    HeaderResponsiveModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule { }
