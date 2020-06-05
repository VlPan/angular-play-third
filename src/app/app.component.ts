import { CubeComponent } from './../../components/cube/cube.component';
import { TestCompDyn } from './../../components/dynamic/test-component';
import { TemplateRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, DoCheck, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { LoggerService } from 'services/logger.service';
import { Observable, Observer, Subject, interval, onErrorResumeNext } from 'rxjs';
import { fromEvent, of } from 'rxjs';
import { mergeMap, delay, switchMap, map } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator, fieldsNotTheSame, rangeValidator } from './forbiddenName';
import { ActivatedRoute } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AppComponent {

  //FROMS
  data: any;
  isOpen = true;
  profileForm = this.fb.group({
    firstName: ['', [Validators.required, forbiddenNameValidator(/bob/)]],
    lastName: ['', Validators.required],
    range: this.fb.group({
      min: ['', Validators.required],
      max: ['', Validators.required]
    }, {validators: [rangeValidator]})
  }, {validators: [fieldsNotTheSame]})
  templateValue = '';

  //View childs
  @ViewChild('tmpl', {static: true}) tmpl: TemplateRef<any>;
  @ViewChild('entry', {static: true, read: ViewContainerRef}) entry: ViewContainerRef;
  @ViewChild('entry2', {static: true, read: ViewContainerRef}) entry2: ViewContainerRef;
  @ViewChild('cube', {static: false}) cube: ComponentRef<CubeComponent>;

  public cubeHeight = 100;
  public cubeWidth = 100;

  public colors = ['#03fcbe', 'green', 'orange', 'blue']

  constructor(private ls: LoggerService, private componentFactoryResolver: ComponentFactoryResolver, private fb: FormBuilder,
    private cd: ChangeDetectorRef
   ) {

  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {

    this.profileForm.valueChanges.subscribe((value) => {
      console.log('favoriteColorControl value', value)
      // console.log(this.profileForm.controls.firstName.status)
      // console.log(this.profileForm.controls.lastName.status)
      console.log(this.profileForm)
    });


    let observer: Observer<number> = {
      next: (v) => {console.log(v)},
      complete: () => {},
      error: () => {}
    }

    function interval(time: number) {
      let o = new Observable((v: Observer<number>) => {
        let i = 0;
        setInterval(() => {
          i+= time;
          v.next(i);
        }, time)
      })

      return o;

    }

    const saveLocation = location => {
      return of(location).pipe(delay(500));
    };

    const click$ = fromEvent(document, 'click');

  click$
    .pipe(
      map((e: MouseEvent) => {
        return saveLocation({
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now()
        });
      })
    )
  // Saved! {x: 98, y: 170, ...}
  .subscribe(r => console.log('Saved!', r));

    // interval(500).subscribe(observer);

    // let s: Subject<any> = new Subject();
    // s.subscribe(observer);
    // s.next(1);
    // s.subscribe(observer);
    // s.next(2);
    // s.complete();

  }

  ngDoCheck(): void {
    console.log('Docheck in Root');
  }

  ngAfterViewInit(): void {
    
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Vlpan',
      age: 22
    })

    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TestCompDyn);
    // this.entry2.createComponent(componentFactory);
    // this.entry2.createComponent(componentFactory);
    // this.entry2.detach(1);
  }

  public getEvent(event: any) {
    console.log(event);
  }
  onHClicked(event) {
    console.log(event);
  }
  public trackByColor(index, obj: undefined) {
    return obj;
  }
}

class User {
  name = 'Bob'
  age = 12
}

let u = new User();

let get: <O, K extends keyof O>(obj: O, key: K) => O[K] = (arg, arg2)  => arg[arg2];
let set: <O, K extends keyof O>(obj: O, key: K, value: O[K]) => void = (arg, arg2, arg3) => {
  arg[arg2] = arg3;
}


set(u, "name", '1')
console.log(get(u, "name"));
console.log(get(u, "age"));


