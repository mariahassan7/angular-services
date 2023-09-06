import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  heading_name: string;
  hero_body_text: string;
  register_service_text: string;
  
  constructor() { 
    this.heading_name= "Angular Application";
    this.hero_body_text = "Welcome to Educative Answers";
    this.register_service_text = "Learn how to generate a service using the Angular CLI";
  }

}
