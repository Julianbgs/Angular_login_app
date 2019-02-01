import { Component, OnInit } from '@angular/core';
import {User} from '../sign-user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private user: User;

  ngOnInit() {
    this.user = new User({
        login:"", password:""
      });
  }

  onSubmit() {
        location.href = "/form";
    }

}




