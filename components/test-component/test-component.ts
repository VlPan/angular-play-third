import { AppComponent } from './../../src/app/app.component';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy, DoCheck, SimpleChanges } from '@angular/core';

type myF = (b: any) => any;
enum myEnum {
  opt1,
  opt2,
  opt3
}

interface MyInterface {
  p1: number;
  p2: number;
}

@Component({
  selector: 'app-test',
  templateUrl: './test-component.html',
  styleUrls: ['./test-component.scss']
})
export class TestComp {


  @Input() public testComp = 'app Cube';


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
  public a: myF = (b: string): number => {
    return 123;
  }

  public getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  public setProperty<O, K extends keyof O>(obj: O, key: K, value: O[K]) {
    obj[key] = value;
  }



}


