import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  withoutLogin_headerShow = false;
  afterLogin_headerShow = true;
  isLogin:any;

  constructor(private service:DataService) {
    this.isLogin = this.service.login();
  
    if(this.isLogin){
    this.afterLogin_headerShow = false;
    this.withoutLogin_headerShow = true;
    // /profile_list
    } else {
    this.afterLogin_headerShow = true;
    this.withoutLogin_headerShow = false;
    }
  
     }

  ngOnInit() {
  }

}
