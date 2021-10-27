import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  bColor = "";

  userName:string = "";
  userEmail:string = "";
  userPassword:string = "";
  confirmPassword:string = "";

  constructor(private router: Router) { }

  ngOnInit(): void { }

  register(n:string, email:string, p:string, cp:string){

    /***** Validating the Entered value *****/
    if(n == "" || email == "" || p =="" || cp == ""){
      this.bColor="red";
      
      return;
    }
    if(p != cp){
      alert("New Password and Confirm password should be same");
      return;
    }
    
    //binding all data as a single object
    let userDetails ={
      userName : n,
      userEmail :email,
      userPassword :p
    }
    
    localStorage.setItem(email,JSON.stringify(userDetails)); //converting into string and storing into Local storage

    this.router.navigateByUrl("login"); //navigate To login page once account created
    
  }
}
