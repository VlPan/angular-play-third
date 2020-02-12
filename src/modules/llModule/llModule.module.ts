import { S1Service } from './../../../services/s1.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LlModuleComponent } from './llModule.component';
import { Ll1Module } from '../ll1/ll1.module';

const routes: Routes = [{
  path: '',
  component: LlModuleComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Ll1Module
  ],
  declarations: [LlModuleComponent]
})
export class LlModuleModule { }
