import { Component, OnInit } from '@angular/core';

  import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { ServiceService } from './service.service';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'sidenav-with-multilevel-menu';
  login:boolean= false;
  error:boolean= false;
  app:boolean= false;
  route:string = ""
  divers: any;
  // edit1: HTMLButtonElement;
  // baki: number;
  // consome: number;
  
  constructor(location: Location, router: Router,private  _router: Router,private service:ServiceService) {

    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
        console.log(this.route)
        if(this.route == "/login" || this.route == ""){
          this.login = true
          this.app = false
        this.error = false
        } 
        else if(this.route == "/Error") {
          this.login = false
          this.app = false
          this.error = true

        }
        else {
          this.app = true
        this.login = false
        this.error = false
        }
      } else {
     
        this.app = true
        this.login = false
        this.error = false
      }
    });
  }
  ngOnInit(): void {
   
  }

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }


}
