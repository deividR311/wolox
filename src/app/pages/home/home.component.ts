import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  daniel = [
    {
      id: 222,
      nombre: 'daniel'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
