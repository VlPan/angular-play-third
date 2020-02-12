import { S1Service } from './../../../services/s1.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-llModule',
  templateUrl: './llModule.component.html',
  styleUrls: ['./llModule.component.css']
})
export class LlModuleComponent implements OnInit {
  data: any;
  constructor( private route: ActivatedRoute, private s1: S1Service, private app: AppComponent) { }

  ngOnInit() {
    console.log('LL - providers : S1', this.s1);
    console.log('LL ::: app', this.app)
    this.data = this.route.snapshot.data;
    // console.log(this.data);
  }

}
