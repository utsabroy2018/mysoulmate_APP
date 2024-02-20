import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from './notice.component';
import { RouterModule, Routes } from '@angular/router';
import { After_login_header_GlobalModule } from '../../after_login_header_Global/after_login_header_Global.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';


const routes: Routes = [
  {
    path: '',
    component: NoticeComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    After_login_header_GlobalModule,
    RouterModule.forChild(routes),

    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  declarations: [NoticeComponent]
})
export class NoticeModule { }
