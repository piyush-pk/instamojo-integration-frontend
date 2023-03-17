import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InstamojoService {
  constructor(private _http: HttpClient) {}

  url = 'https://api.instamojo.com/oauth2/token/';

  headers = {
    accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
  };

  encodedParams = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: 'test_cSC0naTkMG9IJ0fHuT1bQ5gtiEA5GmebFzZ',
    client_secret:
      'test_naLp560gaUb0elWbapL2jNjqDLi9zL6gK50M92Yb81hddkoMTWP4l2VbgFGOF5EV7KMKYSml4Ifq9Id10FiJQYAEZQ6Flwzu6JBf95o830XYYf48htCuFLXmSnH',
  });

  generateToken() {
    return this._http.post(this.url, this.encodedParams, {
      headers: this.headers,
      withCredentials: true,
    });
  }
}
