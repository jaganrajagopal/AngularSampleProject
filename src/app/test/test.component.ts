import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //template: '<input type="text" [id]=myid value="ram" >',//templateUrl: './test.component.html'
  template: '<h2 [style.color]="csscolor">Welcome to India</h2>'+ 
  '<h3 [ngStyle]="mytitlestyle">my color</h3>'+
 // + '<input [(ngModel)]="name" type="text">{{name}}' +
 // + '<div *ngIf="displayname; then block1; else block2"></div> <ng-template #block1><h2>Then Block </h2></ng-template> <ng-template #block2><h2>else </h2></ng-template> '  ,
 //+ '<div [ngSwitch]="switchflag">'+ 
 // '<div *ngSwitchCase="red">you have selected red color</div>' 
 // + '<div *ngSwitchCase="green">you have selected green color</div>'
 // + '<div *ngSwitchCase="blue">you have selected blue color</div><div *ngSwitchDefault>you have selected default color</div></div>',
  '<div *ngFor="let color of colors;odd as f">{{f}} {{color}}</div>',
 styles:[]
  // styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public displayname=false
  public colors =["red","green","yellow","blue"]
  public switchflag="green"
 public name="Jagan"
 public myid="id"
 public csscolor="red"
 public location= window.location.href;
 public mytitlestyle = {
   color:"blue",
   fontStyle:"italic"

 }
  constructor() { }

  ngOnInit() {
    
  }
  logMessage(value)
    {
      console.log(value);
    }

}
