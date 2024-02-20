import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

    // onRightClick(event: Event): void {
  //   event.preventDefault();
  //   // You can add additional logic here if needed
  // }

  @HostListener('document:contextmenu', ['$event'])
  onDocumentRightClick(event: Event): void {
    event.preventDefault();
  }
  
  routerUrl:any;

  withoutLogin_headerShow = false;
  afterLogin_headerShow = true;

  // hideOtheres:any;
  
  constructor(private service:DataService, private router:Router, private msgService: MessageService) {
    
   


    // this.router.events.subscribe(() => {
    //   if(this.router.url == '/profile_list'){
    //     this.afterLogin_headerShow = true;
    //     this.withoutLogin_headerShow = false;
    //     // /profile_list
    //   }else{
    //     this.afterLogin_headerShow = false;
    //     this.withoutLogin_headerShow = true;
    //   }
    // })


   }

  

  ngOnInit() {

     this.TestFn();

  }

  ngAfterViewInit(): void {

  }


  TestFn = () =>{
    this.router.events.subscribe(() => {
      if(this.router.url == '/registration' || this.router.url == '/home'){
        this.afterLogin_headerShow = true;
        this.withoutLogin_headerShow = false;
        // /profile_list
      }else{
        this.afterLogin_headerShow = false;
        this.withoutLogin_headerShow = true;
      }
    })
  }

}
