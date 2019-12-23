import { LoggerService } from 'services/logger.service';
import { Directive, SimpleChanges, ElementRef, HostListener, Input, Output, EventEmitter } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string = 'yellow';
  @Input() textColor: string = 'red';

  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor(private ls: LoggerService, private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.clicked.emit('I was Entered!!!!')
    this.highlight(this.highlightColor, this.textColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(color: string, textColor) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = textColor;
  }


  // public ngOnInit() {
  //   console.log('D: ngOnInit');
  // }

  // public ngOnChanges(e: SimpleChanges) {
  //   console.log('D: ngOnChanges');
  // }

  // public ngDoCheck() {
  //   console.log('D: ngDoCheck');
  // }

  // public ngAfterContentChecked() {
  //   console.log('D: ngAfterContentChecked');
  // }

  // public ngAfterContentInit(): void {
  //   console.log('D: ngAfterContentInit');
  // }

  // ngAfterViewInit(): void {
  //   console.log('D: ngAfterViewInit');
  // }

  // ngAfterViewChecked(): void {
  //   console.log('D: ngAfterViewChecked');
  // }

  // ngOnDestroy(): void {
  //   console.log('D: ngOnDestroy');
  // }

}
