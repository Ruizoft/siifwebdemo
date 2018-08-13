import { BehaviorSubject, Observable } from 'rxjs';

export class TestStore<T> {

  // tslint:disable-next-line:no-empty
  public dispatch = jest.fn();
  // public pipe = jest.fn();
  private state: BehaviorSubject<T> = new BehaviorSubject(undefined);

  public setState(data: T) {
    this.state.next(data);
  }

  public select(selector?: any): Observable<T> {
    return this.state.asObservable();
  }

  public pipe(func?: any): Observable<T> {
    return this.state.asObservable();
  }
}