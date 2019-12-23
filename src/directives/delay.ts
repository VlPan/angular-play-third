import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

export class DelayContext {
  public $implicit = 'I';
  constructor(private loadTime: number) {

   }
}

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {
  constructor(
    private templateRef: TemplateRef<DelayContext>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() appDelay: number = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(
        this.templateRef,
        new DelayContext(performance.now())
        );
    }, this.appDelay);
  }
}
