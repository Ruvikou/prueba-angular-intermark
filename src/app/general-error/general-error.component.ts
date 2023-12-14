import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-general-error',
  templateUrl: './general-error.component.html',
  styleUrls: ['./general-error.component.css']
})
export class GeneralErrorComponent implements OnInit {
  @Input() errors: string[] = [];
  @Output() hasError: EventEmitter<boolean> = new EventEmitter();
  public errorButton = document.getElementById('errorButton')

  constructor() { }

  ngOnInit(): void {
    this.errorButton?.click();
  }

  closeModal() {
    this.hasError.emit(false);
  }

}
