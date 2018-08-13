import { Component, OnInit } from '@angular/core';
import signaturesTemplate  from './signatures.html';

@Component({
    selector: 'signatures-comp',
    template: signaturesTemplate,
})
export class SignaturesComponent implements OnInit {
    // tslint:disable-next-line:no-empty
    constructor() { }

    // tslint:disable-next-line:no-empty
    public ngOnInit(): void { }
}
