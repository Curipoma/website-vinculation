import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent implements OnInit {
  @Input() type = 'rectangle';
  products = ['test1', 'test2', 'test3', 'test4', 'test5'];

  constructor() {}

  ngOnInit(): void {}
}
