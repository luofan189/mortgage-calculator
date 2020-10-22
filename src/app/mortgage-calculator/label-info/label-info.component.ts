import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-info',
  templateUrl: './label-info.component.html',
  styleUrls: ['./label-info.component.scss']
})
export class LabelInfoComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  tooltip: string;

  constructor() { }

  ngOnInit(): void {
  }
}
