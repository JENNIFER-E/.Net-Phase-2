import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { SignInData } from 'src/app/model/signInData';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isFormValid=false;
  areCredInvalid=false;
  constructor(private authenticationService:AdminAuthService) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm: NgForm){
    if(!signInForm.valid)
    {
      this.isFormValid=true;
      this.areCredInvalid=false;
      return;
    }
    this.checkCred(signInForm);
  }
  private checkCred(signInForm:NgForm){
    const signInData=new SignInData(signInForm.value.email,signInForm.value.password);
    if(!this.authenticationService.authenticate(signInData)){
      this.isFormValid=false;
      this.areCredInvalid=true;
    }
  }

}