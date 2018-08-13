import { isPlatformBrowser } from '@angular/common';
import { SwController } from './swController';

export function swControllerFactory(opts: any, platformId: any) {
    return new SwController(isPlatformBrowser(platformId) && opts.enabled !== false ? navigator.serviceWorker :
        undefined);
}