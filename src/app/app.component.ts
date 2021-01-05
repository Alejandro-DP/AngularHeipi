import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  contacts : [
    {'number' : '9989397910', 'name' : 'Alejandro de la Cruz', 'adress' : 'reg 105 col tierra Maya', 'birthday' : '21 jul'}
  ];
  model:any = {};
  addContac() : void {

  }
  deleteContact() : void {

  }
  editContact() : void {

  }
  updataContact () : void {
    
  }
}
