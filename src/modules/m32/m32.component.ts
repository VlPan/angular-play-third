import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-m32',
  templateUrl: './m32.component.html',
  styleUrls: ['./m32.component.css']
})
export class M32Component implements OnInit {
  @Input() primitive: string = '';
  @Input() reference: Object = {};
  constructor() { }

  ngOnInit() {
  }

}
