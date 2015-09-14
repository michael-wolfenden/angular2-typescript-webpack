/// <reference path='../../typings/tsd.d.ts'/>

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'app'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})
export class App {
    name: string;
    constructor() {
        let greeting: string = 'world';
        this.name = `Hello ${greeting}!`;
    }
}
