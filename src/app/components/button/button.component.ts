import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() textInput: string = '';
  @Input() disabled:boolean = false
  @Output() clickEvent = new EventEmitter<void>();

  handleClick() {
    this.clickEvent.emit();
  }
}
