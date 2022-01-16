import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title = "Angular Project"

  constructor() { }

  ngOnInit(): void {
  }

}
