import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username:string,password:string)
  {
    if(username=='Gurwinder' &&  password=='Gurwinder')
      {
        sessionStorage.setItem('username',username);
        return true;
      }else
      {
        return false;
      }
  }
  isUserLoggedIn()
  {
    console.log("User logged in")
    let user=sessionStorage.getItem('username2');
    return !(user==null);
  }
  logout()
  {
    console.log("User logged out")
    sessionStorage.removeItem('username2');
  }
}
