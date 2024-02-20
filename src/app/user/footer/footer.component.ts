import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

pageName = '';

  constructor(private router:Router) {
    
   }

  ngOnInit() {

    this.getPageUrl();

  }

  getPageUrl(){
    this.pageName = '';
    const getPageUrl = this.router.url.split("/");
    this.pageName = getPageUrl.find(element => {
      return element
    })
  }



  bottomNav(para){
    this.router.navigate([para]);
  }
}
