import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiServiceProvider {
  private _url: string = 'http://192.168.43.21:8080';

  get url() {
    return this._url;
  }

}
