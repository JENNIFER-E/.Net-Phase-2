import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from 'src/app/model/signInData';
import { CustAuthService } from 'src/app/services/cust-auth.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  isFormValid=false;
  areCredInvalid=false;
  constructor(private authenticationService:CustAuthService) { }

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