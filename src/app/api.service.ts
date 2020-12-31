import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ApiService {
  baseURL: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  deleteUser(email): Observable<any> {
    const headers = { "content-type": "application/json" };
    // const body = JSON.stringify(email);
    console.log(email);
    return this.http.post(this.baseURL + "/app/receptionist/" + email, {
      headers: headers
    });
  }
}
