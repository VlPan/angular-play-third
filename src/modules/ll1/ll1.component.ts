import { S1Service } from './../../../services/s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ll1',
  templateUrl: './ll1.component.html',
  styleUrls: ['./ll1.component.css']
})
export class Ll1Component implements OnInit {

  constructor(private s1: S1Service) { }

  ngOnInit() {
    console.log('ll1 ::: S1', this.s1);
  }

}
