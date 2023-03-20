import { Component, Input } from '@angular/core';
import { InstamojoService } from 'src/app/services/instamojo.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @Input() invoices!:any;

  constructor(private _instamojo: InstamojoService) {}

  payNow(invoice:any) {
    const formData = new FormData();
    formData.set('amount', invoice.amount)
    formData.set('purpose', "Getting Paid")
    formData.set('webhook', "http://localhost:1202/webhook")
    this._instamojo.createPaymentLink(formData).subscribe(res=>console.log(res))
  }
}
