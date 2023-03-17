import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  url = 'http://localhost:1202/api/';
  urlRoutes = {
    getInvoices: 'get-invoices',
    update: 'update-invoice',
    create: 'create-invoice',
    delete: 'delete-invoice'
  }
  constructor(private _http: HttpClient) { }

  getInvoice() {
    return this._http.get(this.url + this.urlRoutes.getInvoices);
  }

  createInvoice(data: any) {
    return this._http.post(this.url + this.urlRoutes.create, data);
  }

  updateInvoice(data: any) {
    return this._http.put(this.url + this.urlRoutes, data);
  }

  deleteInvoice() {
    return this._http.delete(this.url + this.urlRoutes.delete);
  }


}
