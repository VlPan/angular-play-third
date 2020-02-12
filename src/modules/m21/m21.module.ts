import { S1Service } from './../../../services/s1.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M21Component } from './m21.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [M21Component],
  declarations: [M21Component],
})
export class M21Module { }
