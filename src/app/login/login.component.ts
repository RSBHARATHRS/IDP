import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailID:any = "";
  passwordL:string = "";

  bColorForEmail ="";
  bColorForPass ="";

  constructor(private router: Router,private service:ServService) {   }
 
  ngOnInit(): void { }

  login(email:string, pass:string){

    let details:string | null = localStorage.getItem(email); //retriving user information from the local storage
    if(details == null){
      this.bColorForEmail = 'red';
      return;
    }
    this.bColorForEmail = "Green";

    interface MyObj {
      userName: string;
      userEmail: string;
      userPassword: string;
    }
  
    let obj: MyObj  = JSON.parse(details);
    console.log(obj.userName);
    console.log(obj.userEmail);
    console.log(obj.userPassword);
    //cmd
    this.passwordL = pass;
    if(obj.userPassword != pass){
      this.bColorForPass = "red";
      return;
    }
    this.bColorForPass = "Green";
    //storing user information into service for global usage
    this.service.userName = obj.userName;
    this.service.userEmail = obj.userEmail;
    this.service.userPassword = obj.userPassword;

    //once logged in successfully redirect to loan calculatot or home page
    this.router.navigateByUrl('/loanCalc');
  }

  
}
