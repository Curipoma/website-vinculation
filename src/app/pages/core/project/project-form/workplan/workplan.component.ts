import { Component, OnInit } from '@angular/core';
import { CoreService } from '@services/core';

@Component({
  selector: 'app-workplan',
  templateUrl: './workplan.component.html',
  styleUrls: ['./workplan.component.scss'],
})
export class WorkplanComponent implements OnInit {
  selectedValue: string = '';
  ngOnInit(): void {}
}



