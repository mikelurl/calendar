import { ViewportRuler } from '@angular/cdk/scrolling';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SpaceService {

    private _calHeight = 214;
    private _mobileToolbarHeight = 0;
    private _availHeight = 0;
    private _availHeight$: BehaviorSubject<number>;
  
    constructor(private _ruler: ViewportRuler){
      this._availHeight = this._ruler.getViewportRect().height;
      this._availHeight$ = new BehaviorSubject<number>(this._availHeight)
      this.calc()
    }

    getHeight(): Observable<number> {
      return this._availHeight$.asObservable();
    }

    setMobile(height: number): void {
      if(height===0) this._mobileToolbarHeight = 0;
      else this._mobileToolbarHeight = height - 8;
      this.calc();
    }

    calc(): void {
      let temp = this._availHeight - 64 - this._calHeight - this._mobileToolbarHeight -5;
      this._availHeight$.next(temp);
    }
  
}
