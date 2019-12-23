import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyResolver implements Resolve<Observable<number>> {
  constructor() {}

  resolve() {
    return of(123).pipe(delay(2000));
  }
}
