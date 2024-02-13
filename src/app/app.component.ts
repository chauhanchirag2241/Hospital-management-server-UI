import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hospitalmanagementserverui';
 
  constructor() {
   
    
  }
  ngOnInit() {
    //this.route.routeConfig.component.name
    
    //this.route.events.subscribe((event: any) => {
    //  console.log(event);
    //  if (event instanceof NavigationEnd) {
    //    this.currentUrl = event.url;
    //    if (this.currentUrl == "/login") {
    //      this.showNavigation = false;
    //    } else {
    //      this.showNavigation = true;
    //    }
    //  }
    //});
   
  }
}
