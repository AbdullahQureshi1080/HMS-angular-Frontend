import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private apiService: ApiService) {}
  name = "Welcome to HMS Frontend";
  email = "";
  error = "";
  deletedUserEmail = "";
  deletedUserName = "";
  onKey(event) {
    this.email = event.target.value;
    console.log(this.email);
  }

  deleteUser() {
    this.apiService.deleteUser(this.email).subscribe(data => {
      if (!data) {
        return (this.error = data);
      }
      // const newData = JSON.stringify(data);
      const newData = data;
      this.deletedUserEmail = newData.email;
      this.deletedUserName = newData.firstname + newData.lastname;
      alert(
        "Deleted User Email" +
          this.deletedUserEmail +
          "Deleted User Name" +
          this.deletedUserName
      );
      console.log(data);
    });
  }
}
