import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() mobile: boolean;
  @Output() logout = new EventEmitter();
  @Output() toggle = new EventEmitter();

  constructor() { }

  logoutUser() {
    this.logout.emit();
  }

  toggleNavbar() {
    this.toggle.emit();
  }
}
