import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CubeComponent } from 'components/cube/cube.component';
import { TestComp } from 'components/test-component/test-component';
import { HighlightDirective } from 'src/directives/highlight/highlight-directive';
import { DelayDirective } from 'src/directives/delay';
import { ExponentPipe } from 'src/pipes/exponent';
import { TestCompDyn } from 'components/dynamic/test-component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MyResolver } from 'src/modules/llModule/my-resolver';
import { MyCustomDirective } from './myCustomDirective';
import { MyCustomStrDirective } from './myCustomStructuralDirective';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VTestComponent } from 'components/v-test/v-test.component';

const routes: Routes = [{
  path: 'llModule',
  loadChildren: () => import('./../modules/llModule/llModule.module').then((M) => M.LlModuleModule),
  resolve: {message: MyResolver}
  // canActivate / canLoad placesd
}]
@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    TestComp,
    HighlightDirective,
    DelayDirective,
    ExponentPipe,
    TestCompDyn,
    MyCustomDirective,
    MyCustomStrDirective,
    VTestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [ExponentPipe],
  bootstrap: [AppComponent],
  entryComponents: [TestCompDyn]
})
export class AppModule { }
