import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root-zubcarz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-dream-app';
  secondTitle = "By zubcarz";
  name = 'Carlos Zubieta';

  nameField = new FormControl();

  onChangeName(){
    console.log("name is change" +  this.nameField.value);
    this.name = this.nameField.value;
  }
}
