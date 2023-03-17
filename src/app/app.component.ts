import { Component, OnInit } from '@angular/core';
import { InstamojoService } from './services/instamojo.service';
import { InvoiceService } from './services/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _invoiceService: InvoiceService, private _instamojoService: InstamojoService){}

  invoices:any;
  ngOnInit(): void {
    this._invoiceService.getInvoice().subscribe(res=>this.invoices = res);
    const token = localStorage.getItem("instamojo");
    if(!token) {
      this._instamojoService.generateToken().subscribe(res=>console.log(res));
    }
  }
}
