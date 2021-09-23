import { Component } from '@angular/core';
import { AdminAuthService } from './services/admin-auth.service';
import { CustAuthService } from './services/cust-auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitchen-app';
  constructor(public custAuthService:CustAuthService,public adminAuthService:AdminAuthService){

  }
  logout(){
    this.custAuthService.logout();
    this.adminAuthService.logout();

  }
}
