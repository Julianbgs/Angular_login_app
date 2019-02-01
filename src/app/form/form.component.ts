import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    private user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User({
      login: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confPassword: ""
      });
  }

}
