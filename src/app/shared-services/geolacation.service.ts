import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class GeolacationService {

  constructor() { }

  getLocation(): Observable<Position> {
      return Observable.create(observer => {
          window.navigator.geolocation.getCurrentPosition((coord: Position) => {
              observer.next(coord);
            observer.complete();
        }, (error: PositionError) => {
            observer.error(error);
      });
    });
  }
}
