import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Get the message from parent component
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
