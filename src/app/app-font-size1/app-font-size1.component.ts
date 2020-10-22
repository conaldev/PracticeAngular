import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-font-size1',
  templateUrl: './app-font-size1.component.html',
  styleUrls: ['./app-font-size1.component.scss']
})
export class AppFontSize1Component implements OnInit {

  fontSize = 14;
  constructor() { }
  // tslint:disable-next-line:typedef
  onChange(value) {
    this.fontSize = value;
  }
  ngOnInit(): void {
  }

}
