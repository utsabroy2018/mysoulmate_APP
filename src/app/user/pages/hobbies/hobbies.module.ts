import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbiesComponent } from './hobbies.component';
import { RouterModule, Routes } from '@angular/router';
import { After_login_header_GlobalModule } from '../../after_login_header_Global/after_login_header_Global.module';

const routes: Routes = [
  {
    path: '',
    component: HobbiesComponent,
  }
]
@NgModule({
  imports: [
    CommonModule,
    After_login_header_GlobalModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HobbiesComponent]
})
export class HobbiesModule { }
