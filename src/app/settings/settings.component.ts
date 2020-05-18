import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Password, User } from '../models/user'


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userModel = new User("", "");
  passModel = new Password("", "");
  hide = true;
  hide1 = true;
  changePass(model: Password) {
    console.log(model)
  }
}
