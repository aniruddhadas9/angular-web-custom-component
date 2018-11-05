import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-world-web-part',
  templateUrl: './hello-world-web-part.component.html',
  styleUrls: ['./hello-world-web-part.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloWorldWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
