import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string ='';
  password: string ='';
  auth: any;
  
 constructor() {}
 
  ngOnInit():void{
  
  }

  login(){
    
    if(this.email ==''){
      alert('Please enter email');
    }
  

  
    if(this.password ==''){
      alert('Please enter email');
    
  }
  this.auth.login(this.email,this.password);
  this.email='';
  this.password='';
  
}
}

