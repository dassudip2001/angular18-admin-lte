import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppSetupService {
  public appSubject = new BehaviorSubject<boolean>(false);
  public app$ = this.appSubject.asObservable();
}
