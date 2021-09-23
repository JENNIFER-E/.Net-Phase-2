import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from '../model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {


private readonly mockuser = new SignInData("admin@gmail.com","123456");
    isAuthenticated=false;
     constructor(private router: Router){}

  authenticate(signInData: SignInData):boolean {
    if(this.checkCred(signInData)){
      this.isAuthenticated=true;
      this.router.navigate(['home']);
      return true;  
    }
    this.isAuthenticated=false;
      return false;  
    
  }
  private checkCred(signInData: SignInData):boolean {
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());
  }
  private checkEmail(email: string):boolean {
    return email===this.mockuser.getEmail();
  }
  private checkPassword(password: string):boolean {
    return password===this.mockuser.getPassword();
  }
  logout(){
    this.isAuthenticated=false;
    this.router.navigate(['']);
  }

}

