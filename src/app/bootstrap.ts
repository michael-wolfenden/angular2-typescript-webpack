/// <reference path='../../typings/tsd.d.ts'/>

import 'reflect-metadata';
import {bootstrap} from 'angular2/angular2';
import {App} from './app';
console.log('App', App);
console.log('bootstrap', bootstrap);
bootstrap(App);
