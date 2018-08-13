import  { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DetailsComponent } from './Details/details.component';
import { DocumentComponent } from './Document/document.container';
import { DocumentEffects } from './effects';
import reducer from './reducer';
import { SignaturesComponent } from './Signatures/signatures.component';

@NgModule({
    declarations: [ 
        DocumentComponent, 
        DetailsComponent, 
        SignaturesComponent, 
    ],
    exports: [
        DocumentComponent,
        DetailsComponent,
        SignaturesComponent,
      ],
    imports: [
        CommonModule,
        StoreModule.forFeature('document', reducer),
        EffectsModule.forFeature([DocumentEffects]),
    ],
})
export class DocumentModule {}
