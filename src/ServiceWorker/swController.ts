import { concat, ConnectableObservable, defer, fromEvent, of, throwError } from 'rxjs';
import { filter, map, publish, switchMap, take, tap } from 'rxjs/operators';


const ERR_SW_NOT_SUPPORTED = 'Service workers are disabled or not supported by this browser';

function errorObservable(message: string) {
    return defer(() => throwError(new Error(message)));
}

export class SwController {
    public serviceWorker: any;
    public worker: any;
    public events: any;
    public registration: any;
    public available: any;
    public activated: any;
    // tslint:disable-next-line:no-empty
    constructor(serviceWorker: any){
        this.serviceWorker = serviceWorker;
        if (!serviceWorker) {
            this.worker = this.events = this.registration = errorObservable(ERR_SW_NOT_SUPPORTED);
        }
        else {
            const controllerChangeEvents =  ((fromEvent(serviceWorker, 'controllerchange')));
            
            const controllerChanges =  ((controllerChangeEvents.pipe(map(() => serviceWorker.controller))));
            
            const currentController =  ((defer(() => of(serviceWorker.controller))));
            
            const controllerWithChanges =  ((concat(currentController, controllerChanges)));
            this.worker =  ((controllerWithChanges.pipe(filter((c) => !!c))));
            this.registration =  ((this.worker.pipe(switchMap(() => serviceWorker.getRegistration()))));
            
            const rawEvents = fromEvent(serviceWorker, 'message');
            
            const rawEventPayload = rawEvents.pipe(map((event: any) => event.data));
            
            const eventsUnconnected = (rawEventPayload.pipe(filter((event) => !!event && !!( (event)).type)));
            
            const events =  (eventsUnconnected.pipe(publish()) as ConnectableObservable<any>) ;
            this.events = events;
            events.connect();

            this.available = this.eventsOfType('UPDATE_AVAILABLE');
            this.activated = this.eventsOfType('UPDATE_ACTIVATED');
        }
    }

    public postMessage(action: any, payload: any): any {
        return this.worker
            .pipe(take(1), tap((sw: any): any => {
            sw.postMessage(Object.assign({ action }, payload));
        }))
            .toPromise()
            .then((): any => undefined);
    }

    public eventsOfType(type: any) {
        return (this.events.pipe(filter((event: any): any => event.type === type)));
    }

    get isEnabled(): boolean { return !!this.serviceWorker; }
    
}