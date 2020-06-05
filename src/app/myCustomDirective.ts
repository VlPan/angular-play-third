import { ElementRef } from '@angular/core';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[myD]',
})
export class MyCustomDirective {

    @Input('myD') input

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log('this.input',this.input);
        this.elementRef.nativeElement.style.border = `3px solid ${this.input}`
        
    }

    constructor(private elementRef: ElementRef) {

    }

}
    
