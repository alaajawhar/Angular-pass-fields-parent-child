import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // here we are passing the fields that captured in this component and passes it
  // to the parent component(app.component)
  @Output('redServer') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('blueServer') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('blueprintInput') blueprintInput;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(serverNameInput: HTMLInputElement, blueprintInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: blueprintInput.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    console.log( this.blueprintInput.nativeElement.value);
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.blueprintInput.nativeElement.value;
    });
  }

}
