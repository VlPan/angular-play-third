import { AppComponent } from './../../app/app.component';
import { M2Component } from './../m2/m2.component';
import { S1Service } from './../../../services/s1.service';
import { Component, OnInit, Input, ChangeDetectorRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-m21',
  templateUrl: './m21.component.html',
  styleUrls: ['./m21.component.css']
})
export class M21Component implements OnInit {

  @Input() primitive: string = '';
  @Input() reference: Object = {};

  constructor(private cd: ChangeDetectorRef, private s1: S1Service, private AppComponent: AppComponent) { }

  ngDoCheck(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  dc() {
    this.cd.detectChanges()
  }

  ngOnInit() {
    console.log('M21 :: S1', this.s1);
    console.log('M21 :: AppComponent', this.AppComponent);

    this.cd.detach();
  }

}
