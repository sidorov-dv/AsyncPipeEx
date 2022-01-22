import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fromMouseEventX(target: Node, eventName: string) {
    return new Observable<number>((observer: Observer<number>) => {
      const handler = (e: any) => observer.next(e.clientX);
      target.addEventListener(eventName, handler);
      return () => {
        target.removeEventListener(eventName, handler);
      }
    })
  }

  fromMouseEventY(target: Node, eventName: string) {
    return new Observable<number>((observer: Observer<number>) => {
      const handler = (e: any) => observer.next(e.clientY);
      target.addEventListener(eventName, handler);
      return () => {
        target.removeEventListener(eventName, handler);
      }
    })
  }

  xCoord = this.fromMouseEventX(document, 'mousemove');
  yCoord = this.fromMouseEventY(document, 'mousemove');
}
