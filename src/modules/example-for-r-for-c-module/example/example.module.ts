import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RcService } from './rc.service';

@NgModule({})
export class ExampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExampleModule,
      providers: [
        {
          provide: RcService,
        }
      ]
    }
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ExampleModule,
      providers: [
      {
        provide:  RcService,
      }
    ]
    }
  }
}
