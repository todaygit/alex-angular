import { Component, OnInit } from '@angular/core';

import { SimpleService } from "../simple.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(public simpleService: SimpleService) { }

  ngOnInit() {
  }

}
