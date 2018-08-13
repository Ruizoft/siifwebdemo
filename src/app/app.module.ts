import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import 'bootstrap/scss/bootstrap.scss';
import { DocumentModule } from '../Document/document.module';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '../ServiceWorker/serviceWorker.module';
import { AppComponent } from './app.component';
import './app.scss';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent],
    imports: [
      BrowserModule,
      HttpClientModule,
      DocumentModule,
      StoreModule.forRoot({}),
      StoreDevtoolsModule.instrument({
        name: 'SIIFWEB',
        maxAge: 25,
        logOnly: environment.production,
      }),
      EffectsModule.forRoot([]),
      ServiceWorkerModule.register('/sw.js', { enabled: environment.production }),
 ],
})
export class AppModule {
}
