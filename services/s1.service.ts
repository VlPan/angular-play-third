import { Injectable } from '@angular/core';

@Injectable()
export class S1Service {

  constructor() { }

  log() {
    console.log('S1 provide in root', this);
  }

}
