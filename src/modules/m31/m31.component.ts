import { S1Service } from 'services/s1.service';
import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-m31',
  templateUrl: './m31.component.html',
  styleUrls: ['./m31.component.css']
})
export class M31Component implements OnInit {
  @Input() primitive: string = '';
  @Input() reference: Object = {};
  constructor(private s1: S1Service, private appComponent: AppComponent) { }

  ngOnInit() {
    console.log('M31 - APPP', this.appComponent)
    console.log('M31::: s1', this.s1);
  }

}
