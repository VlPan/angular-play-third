import { TestCompDyn } from './../../components/dynamic/test-component';
import { TemplateRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, DoCheck } from '@angular/core';
import { Component } from '@angular/core';
import { LoggerService } from 'services/logger.service';
import { Observable, Observer, Subject, interval } from 'rxjs';
import { fromEvent, of } from 'rxjs';
import { mergeMap, delay, switchMap, map } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator, fieldsNotTheSame, rangeValidator } from './forbiddenName';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  m2Primitive = 'm2Primitive INIT';
  m2Reference = {text: 'm2Reference INIT'};
  m3Primitive = 'm3Primitive INIT';

  data: any;
  profileForm = this.fb.group({
    firstName: ['', [Validators.required, forbiddenNameValidator(/bob/)]],
    lastName: ['', Validators.required],
    range: this.fb.group({
      min: ['', Validators.required],
      max: ['', Validators.required]
    }, {validators: [rangeValidator]})
  }, {validators: [fieldsNotTheSame]})
  templateValue = '';


  @ViewChild('tmpl', {static: true}) tmpl: TemplateRef<any>;
  @ViewChild('entry', {static: true, read: ViewContainerRef}) entry: ViewContainerRef;
  @ViewChild('entry2', {static: true, read: ViewContainerRef}) entry2: ViewContainerRef;

  public cubeHeight = 100;
  public cubeWidth = 100;

  public colors = ['#03fcbe', 'green', 'orange', 'blue']

  templateCtx = {
    $implicit:" Some strage inplecei name",
    age: 102
  }

  constructor(private ls: LoggerService, private componentFactoryResolver: ComponentFactoryResolver, private fb: FormBuilder,
   ) {
    setTimeout(() => {
      console.log('ROOT :: SET TIME OUT')
      this.m2Primitive = 'updatedM2Primitive';
      this.m2Reference.text = 'm2Reference UPDATED';
    }, 5000)
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  ngDoCheck(): void {
    console.log('ROOT :: NgDoCheck', this.m2Primitive);
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    console.log('ROOT :: OnChanges', this.m2Primitive);

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

    let s: Subject<any> = new Subject();
    s.subscribe(observer);
    s.next(1);
    s.subscribe(observer);
    s.next(2);
    s.complete();

  }

  ngAfterViewInit(): void {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Vlpan',
      age: 22
    })

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TestCompDyn);
    this.entry2.createComponent(componentFactory);
    this.entry2.createComponent(componentFactory);
    this.entry2.detach(1);
  }

  public getEvent(event: any) {
    console.log(event);
  }
  onHClicked(event) {
    console.log(event);
  }
  public trackByColor(index, obj: any) {
    return obj;
  }
}
