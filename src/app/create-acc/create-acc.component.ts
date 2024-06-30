import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrl: './create-acc.component.css'
})
export class CreateAccComponent {

  user_fname: string="";
  user_lname: string="";
  email: string="";
  phone: string="";
  gender: string="";
  password: string="";

  constructor(private http:HttpClient)
  {

  }
  save()
  {
    let bodyData={
      "user_fname":this.user_fname,
      "user_lname":this.user_lname,
      "email":this.email,
      "phone":this.phone,
      "gender":this.gender,
      "password":this.password
    };
    this.http.post("http://localhost:8080/api/v1/save",bodyData,{responseType:'text'}).subscribe((resultData:any)=>

    {
      console.log(resultData);
      alert("User Registered Successfully !");
    });
  }

}
