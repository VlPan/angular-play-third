import { AppComponent } from './../../app/app.component';
import { S1Service } from './../../../services/s1.service';
import { Component, OnInit, Input, ChangeDetectorRef, NgZone, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-m2',
  templateUrl: './m2.component.html',
  styleUrls: ['./m2.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  viewProviders: [S1Service]
})
export class M2Component implements OnInit {

  @Input() primitive: string = '';
  @Input() reference: any = {text: ''};

  constructor(private cd: ChangeDetectorRef, private zone: NgZone, private s1: S1Service, private app: AppComponent) { }

  ngDoCheck(): void {
    // console.log('M2 :: NgDoCheck', this.primitive, this.reference);
  }

  ngOnInit() {
    console.log('M2::: S1', this.s1);
    console.log('M2::: app', this.app);

    this.zone.runOutsideAngular(() => {
      // setTimeout(() => {
      //   console.log('M2 :: SET TIME OUT')
      //   this.primitive = 'M2 PRIMITIVE UPDATED TIMEOUT'
      //   // this.cd.detectChanges();
      // }, 7000)

      // console.log('M2 :: ngOnInit', this.primitive, this.reference);

    })
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log('M2 :: ngOnChanges', this.primitive, this.reference);
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    // console.log('M2 :: ngAfterViewChecked', this.primitive, this.reference);
    // this.primitive = 'M2 PRIMITIVE UPDATED AFTER VIEW CHECKED'
  }
}
