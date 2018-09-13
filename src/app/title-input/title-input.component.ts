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
  title

  @Output()
  titleSubmit : any = new EventEmitter();

  constructor() { }

  onSubmit(formControls) {
    this.titleSubmit.emit(formControls.newTitle.value);
    this.resetInput();
  };

  resetInput() {
    this.formdata = new FormGroup({
      newTitle: new FormControl()
    });
  }

  ngOnInit() {
    this.resetInput();
  }

}
