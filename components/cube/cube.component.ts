import { AppComponent } from './../../src/app/app.component';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy, DoCheck, SimpleChanges, HostListener } from '@angular/core';

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
  selector: 'app-cube',
  templateUrl: './cube.component.tml.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent {

  @Input() highlightColor: string = 'CUBE COLOR';
  @Input() public height = 100;
  @Input() public width = 100;
  @Input() public backgroundColor = 'violet';
  @Input() public text = 'app Cube';
  @Output() public cubeClicked: EventEmitter<{$event: MouseEvent, name: keyof MyInterface}> = new EventEmitter();

  @HostListener('click', ['$event']) onCubeClickedListener ($event) {
    console.log('CUBE CLICKED VIA LISTENER!!!', $event);
  }

  public clickOnCube(event) {
    const test: MyInterface = {p1: 1, p2: 2};
    this.getProperty(test, 'p2');
    // this.getProperty(test, 'p3'); - error
    this.setProperty(test, 'p1', 12);
    // this.setProperty(test, 'p1', '12'); - error
    this.cubeClicked.emit({$event: event, name: 'p2'});
  }

  constructor(private appComponent: AppComponent) {
    console.log('constructor');
  }

  // public ngOnInit() {
  //   console.log('C:ngOnInit');
  // }

  // public ngOnChanges(e: SimpleChanges) {
  //   console.log('C:ngOnChanges');
  // }

  // public ngDoCheck() {
  //   console.log('C:ngDoCheck');
  // }

  // public ngAfterContentChecked() {
  //   console.log('C:ngAfterContentChecked');
  // }

  // public ngAfterContentInit(): void {
  //   console.log('C:ngAfterContentInit');
  // }

  // ngAfterViewInit(): void {
  //   console.log('C:ngAfterViewInit');
  // }

  // ngAfterViewChecked(): void {
  //   console.log('C:ngAfterViewChecked');
  // }

  // ngOnDestroy(): void {
  //   console.log('C:ngOnDestroy');
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


