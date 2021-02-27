import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnDestroy, AfterContentInit {
  ngAfterContentInit(): void {
    this.alaa = this.paragraph.nativeElement.textContent;
        console.log(this.alaa);
    }
  // transfer fields from appComponent to this component using input keyword and the appComponent will
  // pass this field(in this example the appComponent passed it in the html file)(see app.component.html)
  // tslint:disable-next-line:member-ordering no-input-rename
  @Input('SrvElement') element: {type: string, name: string, content: string};
  // tslint:disable-next-line:member-ordering
  @ContentChild('contentParagraph') paragraph: ElementRef;
  // tslint:disable-next-line:member-ordering
  alaa = 'alaa';
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('element destroyed');
  }

}
