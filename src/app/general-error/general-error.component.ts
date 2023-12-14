import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-general-error',
  templateUrl: './general-error.component.html',
  styleUrls: ['./general-error.component.css']
})
export class GeneralErrorComponent implements OnInit {
  // Recieves error messages from component with errors
  @Input() errors: string[] = [];
  @Output() hasError: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.hasError.emit(false);
  }
}
