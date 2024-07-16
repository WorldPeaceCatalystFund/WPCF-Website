import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import {CommonsServices} from './_services/commons.services';
//import {filter} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';


declare let gtag: Function;
//Sdeclare function gtag():void;





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent   {
  title = 'WPCF';
  faCoffee = faCoffee;
  loadingDataImg: boolean = false;



  constructor(public router: Router){



   this.router.events.subscribe(async event => {
     if(event instanceof NavigationEnd) {   
      //gtag('set',{'page_title': event.urlAfterRedirects});
       // gtag('config','G-H875C370F9',{screen_name: event.urlAfterRedirects});//'send_page_view': true,
       //gtag('config','G-H875C370F9');
       gtag('event', 'page_view', {
        page_title: event.urlAfterRedirects,  'send_page_view': false

      });
        //console.log("this is a test");
        //console.log("page_title:" + event.urlAfterRedirects);
     }
   });


    
  }
  
}
