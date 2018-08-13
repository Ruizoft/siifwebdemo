import { Component, OnInit } from '@angular/core';
import detailsTemplate from './details.html';

@Component({
    selector: 'details-comp',
    template: detailsTemplate,
})
export class DetailsComponent implements OnInit {
    // tslint:disable-next-line:no-empty
    constructor() { }

    // tslint:disable-next-line:no-empty
    public ngOnInit(): void { }
}
