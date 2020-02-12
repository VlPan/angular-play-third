import { M21Module } from './../m21/m21.module';
import { M21Component } from './../m21/m21.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M2Component } from './m2.component';
import { S1Service } from 'services/s1.service';

@NgModule({
  imports: [
    CommonModule,
    M21Module
  ],
  exports: [M2Component, M21Component],
  declarations: [M2Component],
  providers: [S1Service]
})
export class M2Module { }
