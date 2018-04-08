import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-parent-self-provider',
  templateUrl: './parent-self-provider.component.html',
  styleUrls: ['./parent-self-provider.component.css'],
  providers: [ SimpleService ]
})
export class ParentSelfProviderComponent implements OnInit {

  constructor(public simpleService: SimpleService) { }

  ngOnInit() {
  }

}
