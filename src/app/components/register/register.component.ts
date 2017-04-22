import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(private validateService: ValidateService) {
  }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    if(!this.validateService.validateRegister(user)) {
      console.log("Enter the details");
    } else {
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      console.log("Enter the email");
    } else{
      return false;
    }
  }
}
