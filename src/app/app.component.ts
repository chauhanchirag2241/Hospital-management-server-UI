import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hospitalmanagementserverui';
  showNavigation: any;
  currentUrl: any;

  constructor(private route: Router) {
   // this.route.navigate(['login']);
  }
  ngOnInit() {
    //this.route.routeConfig.component.name
    console.log(this.route.url);

    this.route.events.subscribe((event: any) => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        if (this.currentUrl == "/login") {
          this.showNavigation = false;
        } else {
          this.showNavigation = true;
        }
      }
    });
   
  }
}
