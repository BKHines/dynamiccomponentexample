import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentc',
  templateUrl: './componentc.component.html',
  styleUrls: ['./componentc.component.css']
})
export class ComponentcComponent implements OnInit {
  @Input() propertya: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
