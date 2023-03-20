import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class InstamojoService {
  constructor(private _http: HttpClient, private _cookieService: CookieService) {}

  url = 'https://test.instamojo.com/';

  urlRoutes = {
    'auth': 'oauth2/token/',
    'payment_requests': 'v2/payment_requests/'
  }

  headers = new HttpHeaders()
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/x-www-form-urlencoded')
  // .set("Authorization", "Bearer " + this._cookieService.get("token"));

  generateToken() {
    const encodedParams = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: 'test_cSC0naTkMG9IJ0fHuT1bQ5gtiEA5GmebFzZ',
      client_secret:
        'test_naLp560gaUb0elWbapL2jNjqDLi9zL6gK50M92Yb81hddkoMTWP4l2VbgFGOF5EV7KMKYSml4Ifq9Id10FiJQYAEZQ6Flwzu6JBf95o830XYYf48htCuFLXmSnH',
    });
    return this._http.post(this.url + this.urlRoutes.auth, encodedParams, {headers: this.headers});
  }

  createPaymentLink(data : any) {
    // this.headers.append("Authorization", "Bearer " + this._cookieService.get("token"));
    // console.log(this.headers)
    return this._http.post(this.url + this.urlRoutes.payment_requests, data, {headers: {
      Authorization: `Bearer ${this._cookieService.get("token")}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }, withCredentials: true, observe: 'response'})
  }
}
