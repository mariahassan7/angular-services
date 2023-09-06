import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'educative-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  app_title:string; 
  heading_name:string;
  hero_body_text:string;
  register_service_text:string;

  constructor(private myService:MyServiceService){
    this.app_title = 'educative_app';
    this.heading_name = this.myService.heading_name;
    this.hero_body_text = this.myService.hero_body_text;
    this.register_service_text = this.myService.register_service_text;
  }
}
