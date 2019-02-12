import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() mobile: boolean;
  @Output() toggle = new EventEmitter();

  constructor() { }

  toggleNavbar() {
    this.toggle.emit();
  }
}
