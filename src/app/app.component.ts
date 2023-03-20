import { Component, OnInit } from '@angular/core';
import { InstamojoService } from './services/instamojo.service';
import { InvoiceService } from './services/invoice.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _cookieService: CookieService, private _invoiceService: InvoiceService, private _instamojoService: InstamojoService){}

  invoices:any;
  ngOnInit(): void {
    this._invoiceService.getInvoice().subscribe(res=>this.invoices = res);
    const token = this._cookieService.get("token");
    if(!token) {
      console.log("Going....")
      this._instamojoService.generateToken().subscribe((res:any)=>this._cookieService.set("token", res["access_token"], res["expires_in"]));
    }
  }
}
