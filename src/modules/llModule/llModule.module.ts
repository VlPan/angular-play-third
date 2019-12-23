import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LlModuleComponent } from './llModule.component';

const routes: Routes = [{
  path: '',
  component: LlModuleComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LlModuleComponent]
})
export class LlModuleModule { }
