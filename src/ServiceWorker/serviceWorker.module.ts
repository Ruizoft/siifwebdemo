import { APP_INITIALIZER, InjectionToken, Injector, NgModule, PLATFORM_ID } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { SwController } from './swController';
import { swControllerFactory } from './swControllerFactory';
import { swInitializerFactory } from './swInitializeFactory';



const SCRIPT = new InjectionToken('NGSW_REGISTER_SCRIPT');

class RegistrationOptions {}

// tslint:disable-next-line:max-classes-per-file
@NgModule()
export class ServiceWorkerModule {
    public static workerFile: string;


    public static register(swFile: string, options: object) {
        return {
            ngModule: ServiceWorkerModule,
            providers: [
              { provide: SCRIPT, useValue: swFile },
              { provide: RegistrationOptions, useValue: options },
              {
                provide: SwController,
                useFactory: swControllerFactory,
                deps: [RegistrationOptions, PLATFORM_ID],
              },
              {
                  provide: APP_INITIALIZER,
                  useFactory: swInitializerFactory,
                  deps: [Injector, SCRIPT, RegistrationOptions, PLATFORM_ID],
                  multi: true,
              },
          ],
        };
    }
    // tslint:disable-next-line:no-empty
    constructor(){     
    }
}

// tslint:disable-next-line:max-classes-per-file
// export class ServiceController extends ServiceWorkerModule {
//   public update: any;
//   public worker: any;
//   constructor() {
//     super();
//     this.update = new Subject();
//     this.worker = new Subject();
//     const self = this;
//     window.addEventListener('load', () => {        
//      self.worker.next(from(navigator.serviceWorker.register(this.workerFile)));
//       self.worker.subscribe((reg: any) => {
//         console.info('ServiceWorker registration successful with scope: ', reg.scope);
//         self.worker.next(reg);
//         self.update.next(fromEvent(reg, 'updatefound').pipe(startWith(false)));
//       },
//       (err: any) => {
//         console.error('ServiceWorker registration failed: ', err);
//       });

//     });
//   }
// }