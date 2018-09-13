import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-row',
  templateUrl: './top-row.component.html',
  styleUrls: ['./top-row.component.css']
})
export class TopRowComponent implements OnInit {
  @Input() numCompleted;

  constructor() { }

  ngOnInit() { }
}
