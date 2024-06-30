import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrl: './user-dash.component.css'
})
export class UserDashComponent {

  email: string="";
  password: string="";

  constructor(private http:HttpClient,private router:Router)
  {

  }
  login()
  {
    console.log(this.email);
    console.log(this.password);

    let bodyData={
      email:this.email,
      password:this.password
    };

    this.http.post("http://localhost:8080/api/v1/login",bodyData).subscribe((resultData:any)=>{
      console.log(resultData);

      if(resultData.message=="Email not exits")
        {
          alert("email not exits");
        }
        else if(resultData.message=="Login Success")
          {
            this.router.navigateByUrl("/user-landing"); 
          }else
          {
            alert("Incorret email and password");
          }
    })
  }


}
