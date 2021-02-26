import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // transfer fields from appComponent to this component using input keyword and the appComponent will
  // pass this field(in this example the appComponent passed it in the html file)(see app.component.html)
  @Input('SrvElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
