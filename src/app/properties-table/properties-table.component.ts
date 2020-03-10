import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.scss']
})
export class PropertiesTableComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  getKeyValObjectsArr(props: object) {
    let arr = [];
    for (let prop in props) {
      arr.push({key: prop, val: props[prop]});
    }
    return arr;
  }

}
