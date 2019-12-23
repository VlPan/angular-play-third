import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-llModule',
  templateUrl: './llModule.component.html',
  styleUrls: ['./llModule.component.css']
})
export class LlModuleComponent implements OnInit {
  data: any;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.data;
    console.log(this.data);
  }

}
