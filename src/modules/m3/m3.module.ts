import { S1Service } from 'services/s1.service';
import { M31Module } from './../m31/m31.module';
import { M32Module } from './../m32/m32.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M3Component } from './m3.component';

@NgModule({
  imports: [
    CommonModule,
    M32Module,
    M31Module
  ],
  exports: [M3Component],
  declarations: [M3Component],
  providers: [S1Service]
})
export class M3Module { }
