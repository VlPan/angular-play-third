import { S1Service } from 'services/s1.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-m3',
  templateUrl: './m3.component.html',
  styleUrls: ['./m3.component.css']
})
export class M3Component implements OnInit {

  @Input() primitive: string = '';
  @Input() reference: Object = {};

  constructor(private s1: S1Service) { }

  ngOnInit() {
    console.log('M3 providers ::: s1', this.s1)
  }

}
