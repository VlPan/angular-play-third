import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-v-test',
  templateUrl: './v-test.component.html',
  styleUrls: ['./v-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class VTestComponent implements OnInit {

  @Input() testInput: string = 'testInput'
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('V :: DoCheck');
  }

  constructor() { }

  ngOnInit() {
  }

}
