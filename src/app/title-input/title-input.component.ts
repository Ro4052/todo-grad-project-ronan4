import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: []
})
export class TitleInputComponent implements OnInit {
  formdata;

  @Input()
  inputId;
  
  @Input()
  placeholder;

  @Input()
  title;

  @Input()
  actionText;

  @Output()
  titleSubmit : any = new EventEmitter();

  constructor() { }

  onSubmit(formControls) {
    const newTitle = formControls.newTitle.value;
    if (newTitle.length) {
      this.titleSubmit.emit(newTitle);
      this.resetInput();
    }
  };

  resetInput() {
    this.formdata = new FormGroup({
      newTitle: new FormControl(this.title)
    });
  }

  ngOnInit() {
    this.resetInput();
  }

}
