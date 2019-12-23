import { AppComponent } from './../../src/app/app.component';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy, DoCheck, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-test-dyn',
  templateUrl: './test-component.html',
  styleUrls: ['./test-component.scss']
})
export class TestCompDyn {


  @Input() public testComp = 'TEST Dynamic';


  constructor(private appComponent: AppComponent) {
    console.log('T: constructor');
  }

  // public ngOnInit() {
  //   console.log('T: ngOnInit');
  // }

  // public ngOnChanges(e: SimpleChanges) {
  //   console.log('T: ngOnChanges');
  //   console.log('T: ngOnChanges', e)
  // }

  // public ngDoCheck() {
  //   console.log('T: ngDoCheck');
  // }

  // public ngAfterContentChecked() {
  //   console.log('T: ngAfterContentChecked');
  // }

  // public ngAfterContentInit(): void {
  //   console.log('T: ngAfterContentInit');
  // }

  // ngAfterViewInit(): void {
  //   console.log('T: ngAfterViewInit');
  // }

  // ngAfterViewChecked(): void {
  //   console.log('T: ngAfterViewChecked');
  // }

  // ngOnDestroy(): void {
  //   console.log('T: ngOnDestroy');
  // }


  // TS Play

  // function type
  // tslint:disable-next-line:align

  public getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  public setProperty<O, K extends keyof O>(obj: O, key: K, value: O[K]) {
    obj[key] = value;
  }



}


